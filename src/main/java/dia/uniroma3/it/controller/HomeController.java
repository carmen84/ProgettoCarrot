package dia.uniroma3.it.controller;

import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import dia.uniroma3.it.bean.ParameterBean;
import dia.uniroma3.it.bean.ResultBean;
import dia.uniroma3.it.core.ServiceRequest;
import dia.uniroma3.it.core.ServiceResponse;
import dia.uniroma3.it.model.ISearchModelService;

/**
 * Handles requests for the application home page.
 */
@RestController
@RequestMapping("/home")
@ResponseBody
public class HomeController<T> {

	@Autowired
	private ISearchModelService<T> searchService;

	@RequestMapping(value = "/numberTab", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseBody
	public ParameterBean getNumberTab() {
		ServiceResponse<ParameterBean> output = searchService
				.getNumberTab(ServiceRequest.getVoidRequest());
		return output.getPayload();
	}

	@RequestMapping(value = "/searchDocuments/{numDocuments}/{cluster}/{parameter}", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseBody
	public ResultBean searchDocuments(@PathVariable("numDocuments") int numDocuments,
			@PathVariable("cluster") String cluster,
			@PathVariable("parameter") String parameter)
			throws SolrServerException {
		ServiceResponse<ResultBean> output = searchService
				.searchDocument(ServiceRequest.getRequest(numDocuments), ServiceRequest.getRequest(cluster), ServiceRequest.getRequest(parameter));
		return output.getPayload();
	}

	@RequestMapping("*")
	@ResponseBody
	public String fallbackMethod() {
		return "fallback method";
	}
}
