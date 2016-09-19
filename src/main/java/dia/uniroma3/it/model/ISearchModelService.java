package dia.uniroma3.it.model;

import org.apache.solr.client.solrj.SolrServerException;

import dia.uniroma3.it.bean.ParameterBean;
import dia.uniroma3.it.bean.ResultBean;
import dia.uniroma3.it.core.ServiceRequest;
import dia.uniroma3.it.core.ServiceResponse;

public interface ISearchModelService<T> {


	public ServiceResponse<ParameterBean> getNumberTab(ServiceRequest<Void> voidRequest);

	public ServiceResponse<ResultBean> searchDocument(ServiceRequest<Integer> numDocuments,
			ServiceRequest<String> cluster, ServiceRequest<String> parameter) throws SolrServerException;
}
