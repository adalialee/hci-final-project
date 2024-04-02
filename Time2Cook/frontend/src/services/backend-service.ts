/**
 * Contains the class definition for HttpService class, and service routes.
 * HttpService provides easy extension for additional routes.
 * @author Christopher Curtis
 */
import apiClient from "./api-client";

/**
 * Defines a reusable HTTP-Service class.
 * Contains a post method.
 */
class HttpService {
  endpoint: string;

  /**
   * Constructs an HTTP service object. Base URL is defined the api-client file.
   * Directs requests to provided endpoint of the base url.
   * @param endpoint the target route to post to
   */
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  /**
   * Performs a post request and loads in the provided message histroy
   * @param messages message history to
   * @returns response object from endpoint, and abort logic
   */
  post(messages: { role: string; content: string; }[]) {
    const controller = new AbortController();
    const request = apiClient.post(this.endpoint, {params: {messages: messages}, signal: controller.signal});
    return {request, cancel: () => controller.abort()};
  }
}

/**
 * Creates a connection for retrieving a recipe.
 * @returns new HttpService object to the recipe route.
 */
const createRecipeService = () => {
  return new HttpService("/recipe");
}

export {createRecipeService};
