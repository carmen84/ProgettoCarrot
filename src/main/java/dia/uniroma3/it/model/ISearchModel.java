package dia.uniroma3.it.model;

import org.apache.solr.client.solrj.SolrServerException;

import dia.uniroma3.it.bean.ParameterBean;
import dia.uniroma3.it.bean.ResultBean;
import dia.uniroma3.it.core.ServiceRequest;

public interface ISearchModel {

	ParameterBean getNumberTab();

	ResultBean searchDocument(Integer numDocuments,
			String cluster, String parameter) throws SolrServerException;
}
