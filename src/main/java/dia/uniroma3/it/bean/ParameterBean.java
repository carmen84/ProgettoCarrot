package dia.uniroma3.it.bean;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ParameterBean implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer numberTab;
	
	private List<String> nameTab;
	
	private List<String> path;
	
	
	public List<String> getPath() {
		if(path == null){
			path = new ArrayList<String>();
		}
		return path;
	}

	public void setPath(List<String> path) {
		this.path = path;
	}

	public List<String> getNameTab() {
		if(nameTab == null){
			nameTab = new ArrayList<String>();
		}
		return nameTab;
	}

	public void setNameTab(List<String> nameTab) {
		this.nameTab = nameTab;
	}

	public Integer getNumberTab() {
		return numberTab;
	}

	public void setNumberTab(Integer numberTab2) {
		this.numberTab = numberTab2;
	}
}
