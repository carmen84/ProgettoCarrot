package dia.uniroma3.it.model;

import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dia.uniroma3.it.bean.ParameterBean;
import dia.uniroma3.it.bean.ResultBean;
import dia.uniroma3.it.core.ServiceRequest;
import dia.uniroma3.it.core.ServiceResponse;

@Service
public class SearchModel2Controller<T> implements ISearchModelService<T> {

	@Autowired
	private ISearchModel searchModel;

//	public ServiceResponse<ResultBean> searchDocument(
//			ServiceRequest<String> request) throws SolrServerException {
//		ServiceResponse<ResultBean> responseWithPayload = (ServiceResponse<ResultBean>) ServiceResponse
//				.getResponseWithPayload(searchModel.searchDocument(request.getPayload()));
//		return responseWithPayload;
//	}

	public ServiceResponse<ParameterBean> getNumberTab(
			ServiceRequest<Void> voidRequest) {
		ServiceResponse<ParameterBean> responseWithPayload = (ServiceResponse<ParameterBean>) ServiceResponse
				.getResponseWithPayload(searchModel.getNumberTab());
		return responseWithPayload;
	}

	public ServiceResponse<ResultBean> searchDocument(
			ServiceRequest<Integer> numDocuments,
			ServiceRequest<String> cluster, ServiceRequest<String> parameter)
			throws SolrServerException {
		ServiceResponse<ResultBean> responseWithPayload = (ServiceResponse<ResultBean>) ServiceResponse
				.getResponseWithPayload(searchModel.searchDocument(numDocuments.getPayload(), cluster.getPayload(), parameter.getPayload()));
		return responseWithPayload;
	}

}
