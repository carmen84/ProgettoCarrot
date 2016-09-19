package dia.uniroma3.it.core;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;


public class ServiceResponse<PAYLOAD> implements Serializable {

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 8560554309577102555L;

	/** The payload. */
	PAYLOAD payload;

	/** The exit status. */
	ExitStauts exitStatus = null;

	/** The errors message. */
	private List<String> errorsMessage = null;

	/**
	 * The Enum ExitStauts.
	 */
	public enum ExitStauts {

		/** The ok. */
		OK,
		/** The error. */
		ERROR,
		/** The warning. */
		WARNING
	}

	/**
	 * Instantiates a new service response.
	 * 
	 * @param payload
	 *            the payload
	 * @deprecated Use dsl i.e. ServiceResponse.getResponseWithPayload(payload);
	 */
	@Deprecated
	public ServiceResponse(PAYLOAD payload) {
		this.payload = payload;
	}

	/**
	 * Instantiates a new service response.
	 * @deprecated Use dsl i.e. ServiceResponse.getEmptyResponseForType(Class.class); or ServiceResponse.getEmptyResponseWithError(Class<T>, String)
	 */
	@Deprecated
	public ServiceResponse() {

	}

	/**
	 * Gets the payload.
	 * 
	 * @return the payload
	 */
	public PAYLOAD getPayload() {
		return payload;
	}

	/**
	 * Sets the payload.
	 * 
	 * @param payload
	 *            the new payload
	 */
	public void setPayload(PAYLOAD payload) {
		this.payload = payload;
	}

	/**
	 * Adds the error message.
	 * 
	 * @param error
	 *            the error
	 * @return 
	 */
	public ServiceResponse<PAYLOAD> addErrorMessage(String error) {
		getErrorList().add(error == null ? "UNKNOWN ERROR" : error);
		return this;
	}

	/**
	 * Adds the errors message.
	 *
	 * @param errors
	 *            the errors
	 * @return 
	 */
	public ServiceResponse<PAYLOAD> addErrorsMessage(Collection<String> errors) {
		getErrorList().addAll(errors);
		return this;
	}

	/**
	 * Checks for errors.
	 * 
	 * @return true, if successful
	 */
	public boolean hasErrors() {
		return errorsMessage != null;
	}

	/**
	 * Checks if successful.
	 * 
	 * @return true, if successful
	 */
	public boolean isSuccessful() {
		return !hasErrors();
	}

	/**
	 * Gets the errors.
	 * 
	 * @return the errors
	 */
	public List<String> getErrors() {
		if (errorsMessage != null) {
			return Collections.unmodifiableList(errorsMessage);
		}
		return Collections.emptyList();
	}

	private List<String> getErrorList() {
		if (errorsMessage == null) {
			errorsMessage = new ArrayList<String>();
		}
		return errorsMessage;
	}

	public static ServiceResponse<Void> getVoidResponse() {
		return new ServiceResponse<Void>(null);
	}

	public static <T> ServiceResponse<T> getResponseWithPayload(T payload) {
		return new ServiceResponse<T>(payload);
	}

	public static <T> ServiceResponse<T> getEmptyResponseForType(Class<T> clazz) {
		return new ServiceResponse<T>();
		
	}

	public static <T> ServiceResponse<T> getEmptyResponseWithError(
			Class<T> clazz, String errorMessage) {
		ServiceResponse<T> output = getEmptyResponseForType(clazz);
		
		return output.addErrorMessage(errorMessage);
	}

}
