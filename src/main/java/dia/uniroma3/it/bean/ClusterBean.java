package dia.uniroma3.it.bean;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class ClusterBean implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -4349121479993993095L;

	private List<DocumentBean> documents = new ArrayList<DocumentBean>();
	private List<AttributeBean> attributes = new ArrayList<AttributeBean>();
	private Integer id;
	private String label;
	private List<String> phrases = new ArrayList<String>();
	private Double score;
	private List<ClusterBean> subclusters= new ArrayList<ClusterBean>();
	

	public List<DocumentBean> getDocuments() {
		return documents;
	}
	public void setDocuments(List<DocumentBean> documents) {
		this.documents = documents;
	}
	public List<AttributeBean> getAttributes() {
		return attributes;
	}
	public void setAttributes(List<AttributeBean> attributes) {
		this.attributes = attributes;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public List<String> getPhrases() {
		return phrases;
	}
	public void setPhrases(List<String> phrases) {
		this.phrases = phrases;
	}
	public Double getScore() {
		return score;
	}
	public void setScore(Double score) {
		this.score = score;
	}
	public List<ClusterBean> getSubclusters() {
		return subclusters;
	}
	public void setSubclusters(List<ClusterBean> subclusters) {
		this.subclusters = subclusters;
	}
}
