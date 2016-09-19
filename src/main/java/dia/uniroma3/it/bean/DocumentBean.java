package dia.uniroma3.it.bean;

import java.io.Serializable;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;

import com.google.common.collect.Maps;
@Getter
@Setter
public class DocumentBean implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -1605014315081827810L;
	
	private String title;
	
	private  String summary;

	private  String content_url;

	private Integer id;

	private  String thumbnail_url;

	private  String size;

	private List<String> sources;

	private String language;
	
	private String partitions;

    private Map<String, Object> fields = Maps.newHashMap();

    private Map<String, Object> fieldsView = Collections.unmodifiableMap(fields);

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getContent_url() {
		return content_url;
	}

	public void setContent_url(String content_url) {
		this.content_url = content_url;
	}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getThumbnail_url() {
		return thumbnail_url;
	}

	public void setThumbnail_url(String thumbnail_url) {
		this.thumbnail_url = thumbnail_url;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public List<String> getSources() {
		return sources;
	}

	public void setSources(List<String> sources) {
		this.sources = sources;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getPartitions() {
		return partitions;
	}

	public void setPartitions(String partitions) {
		this.partitions = partitions;
	}

	public Map<String, Object> getFields() {
		return fields;
	}

	public void setFields(Map<String, Object> fields) {
		this.fields = fields;
	}

	public Map<String, Object> getFieldsView() {
		return fieldsView;
	}

	public void setFieldsView(Map<String, Object> fieldsView) {
		this.fieldsView = fieldsView;
	}

	


}
