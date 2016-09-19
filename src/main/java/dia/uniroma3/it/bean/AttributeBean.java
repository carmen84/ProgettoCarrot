package dia.uniroma3.it.bean;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AttributeBean implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 3223856839721656110L;

	private String key;
	private Object obj;
	

	public Object getObj() {
		return obj;
	}

	public void setObj(Object obj) {
		this.obj = obj;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}
	
}
