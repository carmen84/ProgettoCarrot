package dia.uniroma3.it.bean;

import java.io.Serializable;
import java.util.List;


public class ResultBean implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -1757370392337284076L;
	
	
	private List<DocumentBean> documents;
	
	private List<ClusterBean> clusters;
	
	private List<AttributeBean> attributes;

	public List<DocumentBean> getDocuments() {
		return documents;
	}

	public void setDocuments(List<DocumentBean> documents) {
		this.documents = documents;
	}

	public List<ClusterBean> getClusters() {
		return clusters;
	}

	public void setClusters(List<ClusterBean> clusters) {
		this.clusters = clusters;
	}

	public List<AttributeBean> getAttributes() {
		return attributes;
	}

	public void setAttributes(List<AttributeBean> attributes) {
		this.attributes = attributes;
	}
	

}
