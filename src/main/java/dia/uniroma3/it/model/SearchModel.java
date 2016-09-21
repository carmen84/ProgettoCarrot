package dia.uniroma3.it.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServer;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrServer;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.carrot2.clustering.kmeans.BisectingKMeansClusteringAlgorithm;
import org.carrot2.clustering.lingo.LingoClusteringAlgorithm;
import org.carrot2.clustering.stc.STCClusteringAlgorithm;
import org.carrot2.clustering.synthetic.ByFieldClusteringAlgorithm;
import org.carrot2.clustering.synthetic.ByUrlClusteringAlgorithm;
//import org.carrot2.clustering.lingo.LingoClusteringAlgorithm;
//import org.carrot2.clustering.stc.STCClusteringAlgorithm;
//import org.carrot2.clustering.synthetic.ByFieldClusteringAlgorithm;
//import org.carrot2.clustering.synthetic.ByUrlClusteringAlgorithm;
import org.carrot2.core.Cluster;
import org.carrot2.core.Controller;
import org.carrot2.core.ControllerFactory;
import org.carrot2.core.Document;
import org.carrot2.core.ProcessingResult;
import org.carrot2.core.attribute.CommonAttributesDescriptor;
import org.carrot2.shaded.guava.common.collect.Maps;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import dia.uniroma3.it.bean.AttributeBean;
import dia.uniroma3.it.bean.ClusterBean;
import dia.uniroma3.it.bean.DocumentBean;
import dia.uniroma3.it.bean.ParameterBean;
import dia.uniroma3.it.bean.ResultBean;


@Service("searchModel")
public class SearchModel implements ISearchModel{
	
	private int defaultRows = 10;
	
	@Value("${url}")
	private String url;
	
	@Value("${numberTab}")
	private Integer numberTab;
	
	@Value("${nameTab}")
	private String nameTab;
	
	@Value("${pathTab}")
	private String pathTab;
	
	
	
	public ResultBean searchDocument(Integer numDocuments, String cluster, String parameter) throws SolrServerException {
		  SolrServer server = new HttpSolrServer( url );
		  SolrQuery query = new SolrQuery();
		  query.setQuery(parameter.equals("null") ?  "*:*" : parameter);
		  query.setRows(numDocuments != null ? numDocuments : defaultRows);
		  QueryResponse rsp = server.query( query );
		  List<SolrDocument> results = rsp.getResults();
		  final ArrayList<Document> documents = new ArrayList<Document>();
		  for(SolrDocument solrDoc : results){
			  Document doc = new Document();
			  doc.setTitle(solrDoc.getFieldValue("testo").toString());
			  doc.setSummary(solrDoc.getFieldValue("includes").toString());
			  doc.setField("id", solrDoc.getFieldValues("id"));
			  doc.setField("sentimento",solrDoc.getFieldValues("sentimento"));
			  doc.setField("data", solrDoc.getFirstValue("data"));
			  doc.setField("utente", solrDoc.getFieldValue("utente"));
			  doc.setField("versione", solrDoc.getFieldValue("_version_"));
			  doc.setField("name", solrDoc.getFieldValue("screenName"));
			  documents.add(doc);
		  }
		  System.out.println("Risultato query : "+ results.toString());
		  final Controller controller = ControllerFactory.createSimple();
	        final Map<String, Object> attributes = Maps.newHashMap();
	        CommonAttributesDescriptor.attributeBuilder(attributes)
	            .documents(documents)
	            .query("data mining");

	        final ProcessingResult result = controller.process(attributes,
	            getClusterType(cluster));
	        ResultBean bean = new ResultBean();
	       bean.setClusters(convertListCluster(result.getClusters()));
	       bean.setAttributes(convertListAttributes(result.getAttributes()));
	       bean.setDocuments(convertListDocuments(result.getDocuments()));
			
		return bean;
	}
	
	private Object getClusterType(String cluster){
		if("lingo".equals(cluster)){
			return LingoClusteringAlgorithm.class;
		}else if("STC".equals(cluster)){
			return STCClusteringAlgorithm.class; 
		}else if("K-means".equals(cluster)){
			return BisectingKMeansClusteringAlgorithm.class;
//			return null;
		}else if("By URL".equals(cluster)){
			return ByUrlClusteringAlgorithm.class;
		}else if("Source".equals(cluster)){
			return ByFieldClusteringAlgorithm.class;
		}else{
			return LingoClusteringAlgorithm.class;
		}
	}
	

	private List<AttributeBean> convertListAttributes(
			Map<String, Object> attributes) {
		List<AttributeBean> result = new ArrayList<AttributeBean>();
		for(String key : attributes.keySet()){
			AttributeBean attrBean = new AttributeBean();
			attrBean.setKey(key);
			attrBean.setObj(attributes.get(key));
			result.add(attrBean);
		}
		return result;
	}

	private List<ClusterBean> convertListCluster(List<Cluster> clusters) {
		List<ClusterBean> result = new ArrayList<ClusterBean>();
		for(Cluster  cluster : clusters){
			ClusterBean clusterbean = new ClusterBean();
			clusterbean.setDocuments(convertListDocuments(cluster.getAllDocuments()));
			clusterbean.setAttributes(convertListAttributes(cluster.getAttributes()));
			clusterbean.setId(cluster.getId());
			clusterbean.setLabel(cluster.getLabel());
			clusterbean.setPhrases(cluster.getPhrases());
			clusterbean.setScore(cluster.getScore());
			clusterbean.setSubclusters(convertListCluster(cluster.getSubclusters()));
			result.add(clusterbean);
		}
		return result;
	}

	private List<DocumentBean> convertListDocuments(List<Document> documents) {
		List<DocumentBean> result = new ArrayList<DocumentBean>();
		for(Document doc : documents){
			DocumentBean docBean = new DocumentBean();
			docBean.setContent_url(doc.getContentUrl());
			docBean.setSummary(doc.getSummary());
			docBean.setFields(doc.getFields());
			docBean.setId(doc.getId());
			docBean.setLanguage(doc.getLanguage() != null ? doc.getLanguage().name() : null);
			docBean.setSources(doc.getSources());
			docBean.setTitle(doc.getTitle());
			result.add(docBean);
		}
		return result;
	}

	public ParameterBean getNumberTab() {
		ParameterBean parameter =  new ParameterBean();
		parameter.setNumberTab(this.numberTab);
		String[] split = nameTab.split("%");
		for(String name : split){
			parameter.getNameTab().add(name);
		}
		
		String[] url = pathTab.split("%");
		for(String u : url){
			parameter.getPath().add(u);
		}
		return parameter;
	}

	
}
