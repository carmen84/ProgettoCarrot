package dia.uniroma3.it.core;


import java.io.Serializable;

public class ServiceRequest<PAYLOAD> implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5322364847780407185L;

	public static ServiceRequest<Void> getVoidRequest(){
		return new ServiceRequest<Void>(null);
	}
	
	public static <T> ServiceRequest<T> getRequest(T payload){
		return new ServiceRequest<T>(payload);
	}
	
	
	@Override
	public String toString() {
		return "ServiceRequest [payload=" + payload + "]";
	}

	PAYLOAD payload;

	/**
	 * Instantiates a new service request.
	 *
	 * @param payload the payload
	 * @deprecated Use DSL i.e. (ServiceRequest.getRequest(payload) or ServiceRequest.getVoidRequest()
	 */
	@Deprecated
	public ServiceRequest(PAYLOAD payload) {
		this.payload = payload;
	}

	/**
	 * @return the payload
	 */
	public PAYLOAD getPayload() {
		return payload;
	}

	public boolean hasAPayload() {
		return this.payload != null;
	}

}
