/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/certificateOperationsMappers";
import * as Parameters from "../models/parameters";
import { HCHBServicesPropertyServiceAPIv1Context } from "../hCHBServicesPropertyServiceAPIv1Context";

/** Class representing a CertificateOperations. */
export class CertificateOperations {
  private readonly client: HCHBServicesPropertyServiceAPIv1Context;

  /**
   * Create a CertificateOperations.
   * @param {HCHBServicesPropertyServiceAPIv1Context} client Reference to the service client.
   */
  constructor(client: HCHBServicesPropertyServiceAPIv1Context) {
    this.client = client;
  }

  /**
   * @param property
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateOperationsUpdateResponse>
   */
  update(property: Models.Certificate, options?: msRest.RequestOptionsBase): Promise<Models.CertificateOperationsUpdateResponse>;
  /**
   * @param property
   * @param callback The callback
   */
  update(property: Models.Certificate, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param property
   * @param options The optional parameters
   * @param callback The callback
   */
  update(property: Models.Certificate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  update(property: Models.Certificate, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.CertificateOperationsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        property,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.CertificateOperationsUpdateResponse>;
  }

  /**
   * @param property
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateOperationsCreateResponse>
   */
  create(property: Models.Certificate, options?: msRest.RequestOptionsBase): Promise<Models.CertificateOperationsCreateResponse>;
  /**
   * @param property
   * @param callback The callback
   */
  create(property: Models.Certificate, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param property
   * @param options The optional parameters
   * @param callback The callback
   */
  create(property: Models.Certificate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  create(property: Models.Certificate, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.CertificateOperationsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        property,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.CertificateOperationsCreateResponse>;
  }

  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateOperationsDecryptResponse>
   */
  decrypt(version: string, id: string, name: string, operation: Models.DecryptOperation, options?: msRest.RequestOptionsBase): Promise<Models.CertificateOperationsDecryptResponse>;
  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param callback The callback
   */
  decrypt(version: string, id: string, name: string, operation: Models.DecryptOperation, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param options The optional parameters
   * @param callback The callback
   */
  decrypt(version: string, id: string, name: string, operation: Models.DecryptOperation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  decrypt(version: string, id: string, name: string, operation: Models.DecryptOperation, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.CertificateOperationsDecryptResponse> {
    return this.client.sendOperationRequest(
      {
        version,
        id,
        name,
        operation,
        options
      },
      decryptOperationSpec,
      callback) as Promise<Models.CertificateOperationsDecryptResponse>;
  }

  /**
   * @param version
   * @param id
   * @param name
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateOperationsReadResponse>
   */
  read(version: string, id: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificateOperationsReadResponse>;
  /**
   * @param version
   * @param id
   * @param name
   * @param callback The callback
   */
  read(version: string, id: string, name: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param version
   * @param id
   * @param name
   * @param options The optional parameters
   * @param callback The callback
   */
  read(version: string, id: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  read(version: string, id: string, name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.CertificateOperationsReadResponse> {
    return this.client.sendOperationRequest(
      {
        version,
        id,
        name,
        options
      },
      readOperationSpec,
      callback) as Promise<Models.CertificateOperationsReadResponse>;
  }

  /**
   * @param version
   * @param id
   * @param name
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateOperationsDeleteMethodResponse>
   */
  deleteMethod(version: string, id: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificateOperationsDeleteMethodResponse>;
  /**
   * @param version
   * @param id
   * @param name
   * @param callback The callback
   */
  deleteMethod(version: string, id: string, name: string, callback: msRest.ServiceCallback<Models.ValidationResult>): void;
  /**
   * @param version
   * @param id
   * @param name
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(version: string, id: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ValidationResult>): void;
  deleteMethod(version: string, id: string, name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ValidationResult>, callback?: msRest.ServiceCallback<Models.ValidationResult>): Promise<Models.CertificateOperationsDeleteMethodResponse> {
    return this.client.sendOperationRequest(
      {
        version,
        id,
        name,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.CertificateOperationsDeleteMethodResponse>;
  }

  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateOperationsEncryptResponse>
   */
  encrypt(version: string, id: string, name: string, operation: Models.EncryptOperation, options?: msRest.RequestOptionsBase): Promise<Models.CertificateOperationsEncryptResponse>;
  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param callback The callback
   */
  encrypt(version: string, id: string, name: string, operation: Models.EncryptOperation, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param options The optional parameters
   * @param callback The callback
   */
  encrypt(version: string, id: string, name: string, operation: Models.EncryptOperation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  encrypt(version: string, id: string, name: string, operation: Models.EncryptOperation, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.CertificateOperationsEncryptResponse> {
    return this.client.sendOperationRequest(
      {
        version,
        id,
        name,
        operation,
        options
      },
      encryptOperationSpec,
      callback) as Promise<Models.CertificateOperationsEncryptResponse>;
  }

  /**
   * @param name
   * @param selectorFilterType
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateOperationsSearchResponse>
   */
  search(name: string, selectorFilterType: number, options?: Models.CertificateOperationsSearchOptionalParams): Promise<Models.CertificateOperationsSearchResponse>;
  /**
   * @param name
   * @param selectorFilterType
   * @param callback The callback
   */
  search(name: string, selectorFilterType: number, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param name
   * @param selectorFilterType
   * @param options The optional parameters
   * @param callback The callback
   */
  search(name: string, selectorFilterType: number, options: Models.CertificateOperationsSearchOptionalParams, callback: msRest.ServiceCallback<any>): void;
  search(name: string, selectorFilterType: number, options?: Models.CertificateOperationsSearchOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.CertificateOperationsSearchResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        selectorFilterType,
        options
      },
      searchOperationSpec,
      callback) as Promise<Models.CertificateOperationsSearchResponse>;
  }

  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateOperationsSignResponse>
   */
  sign(version: string, id: string, name: string, operation: Models.SignOperation, options?: msRest.RequestOptionsBase): Promise<Models.CertificateOperationsSignResponse>;
  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param callback The callback
   */
  sign(version: string, id: string, name: string, operation: Models.SignOperation, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param options The optional parameters
   * @param callback The callback
   */
  sign(version: string, id: string, name: string, operation: Models.SignOperation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  sign(version: string, id: string, name: string, operation: Models.SignOperation, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.CertificateOperationsSignResponse> {
    return this.client.sendOperationRequest(
      {
        version,
        id,
        name,
        operation,
        options
      },
      signOperationSpec,
      callback) as Promise<Models.CertificateOperationsSignResponse>;
  }

  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateOperationsUnwrapKeyResponse>
   */
  unwrapKey(version: string, id: string, name: string, operation: Models.UnwrapKeyOperation, options?: msRest.RequestOptionsBase): Promise<Models.CertificateOperationsUnwrapKeyResponse>;
  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param callback The callback
   */
  unwrapKey(version: string, id: string, name: string, operation: Models.UnwrapKeyOperation, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param options The optional parameters
   * @param callback The callback
   */
  unwrapKey(version: string, id: string, name: string, operation: Models.UnwrapKeyOperation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  unwrapKey(version: string, id: string, name: string, operation: Models.UnwrapKeyOperation, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.CertificateOperationsUnwrapKeyResponse> {
    return this.client.sendOperationRequest(
      {
        version,
        id,
        name,
        operation,
        options
      },
      unwrapKeyOperationSpec,
      callback) as Promise<Models.CertificateOperationsUnwrapKeyResponse>;
  }

  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateOperationsVerifyResponse>
   */
  verify(version: string, id: string, name: string, operation: Models.VerifyOperation, options?: msRest.RequestOptionsBase): Promise<Models.CertificateOperationsVerifyResponse>;
  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param callback The callback
   */
  verify(version: string, id: string, name: string, operation: Models.VerifyOperation, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param options The optional parameters
   * @param callback The callback
   */
  verify(version: string, id: string, name: string, operation: Models.VerifyOperation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  verify(version: string, id: string, name: string, operation: Models.VerifyOperation, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.CertificateOperationsVerifyResponse> {
    return this.client.sendOperationRequest(
      {
        version,
        id,
        name,
        operation,
        options
      },
      verifyOperationSpec,
      callback) as Promise<Models.CertificateOperationsVerifyResponse>;
  }

  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateOperationsWrapKeyResponse>
   */
  wrapKey(version: string, id: string, name: string, operation: Models.WrapKeyOperation, options?: msRest.RequestOptionsBase): Promise<Models.CertificateOperationsWrapKeyResponse>;
  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param callback The callback
   */
  wrapKey(version: string, id: string, name: string, operation: Models.WrapKeyOperation, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param version
   * @param id
   * @param name
   * @param operation
   * @param options The optional parameters
   * @param callback The callback
   */
  wrapKey(version: string, id: string, name: string, operation: Models.WrapKeyOperation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  wrapKey(version: string, id: string, name: string, operation: Models.WrapKeyOperation, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.CertificateOperationsWrapKeyResponse> {
    return this.client.sendOperationRequest(
      {
        version,
        id,
        name,
        operation,
        options
      },
      wrapKeyOperationSpec,
      callback) as Promise<Models.CertificateOperationsWrapKeyResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "api/v1/Certificates",
  requestBody: {
    parameterPath: "property",
    mapper: {
      ...Mappers.Certificate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    400: {
      bodyMapper: Mappers.ValidationResult
    },
    401: {},
    404: {},
    409: {
      bodyMapper: Mappers.ValidationResult
    },
    default: {}
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/Certificates",
  requestBody: {
    parameterPath: "property",
    mapper: {
      ...Mappers.Certificate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    400: {
      bodyMapper: Mappers.ValidationResult
    },
    401: {},
    409: {
      bodyMapper: Mappers.ValidationResult
    },
    default: {}
  },
  serializer
};

const decryptOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/Certificates/Decrypt/{Name}/{Id}/{Version}",
  urlParameters: [
    Parameters.version,
    Parameters.id,
    Parameters.name
  ],
  requestBody: {
    parameterPath: "operation",
    mapper: {
      ...Mappers.DecryptOperation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    400: {
      bodyMapper: Mappers.ValidationResult
    },
    401: {},
    404: {},
    default: {}
  },
  serializer
};

const readOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/v1/Certificates/{Name}/{Id}/{Version}",
  urlParameters: [
    Parameters.version,
    Parameters.id,
    Parameters.name
  ],
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    400: {
      bodyMapper: Mappers.ValidationResult
    },
    401: {},
    404: {},
    default: {}
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "api/v1/Certificates/{Name}/{Id}/{Version}",
  urlParameters: [
    Parameters.version,
    Parameters.id,
    Parameters.name
  ],
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    400: {
      bodyMapper: Mappers.ValidationResult
    },
    401: {},
    404: {},
    default: {}
  },
  serializer
};

const encryptOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/Certificates/Encrypt/{Name}/{Id}/{Version}",
  urlParameters: [
    Parameters.version,
    Parameters.id,
    Parameters.name
  ],
  requestBody: {
    parameterPath: "operation",
    mapper: {
      ...Mappers.EncryptOperation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    400: {
      bodyMapper: Mappers.ValidationResult
    },
    401: {},
    404: {
      bodyMapper: Mappers.ValidationResult
    },
    default: {}
  },
  serializer
};

const searchOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/v1/Certificates/Search",
  queryParameters: [
    Parameters.name,
    Parameters.selectorFilterType,
    Parameters.selectors
  ],
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Certificate"
            }
          }
        }
      }
    },
    400: {
      bodyMapper: Mappers.ValidationResult
    },
    401: {},
    404: {},
    default: {}
  },
  serializer
};

const signOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/Certificates/Sign/{Name}/{Id}/{Version}",
  urlParameters: [
    Parameters.version,
    Parameters.id,
    Parameters.name
  ],
  requestBody: {
    parameterPath: "operation",
    mapper: {
      ...Mappers.SignOperation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    400: {
      bodyMapper: Mappers.ValidationResult
    },
    401: {},
    404: {},
    default: {}
  },
  serializer
};

const unwrapKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/Certificates/UnwrapKey/{Name}/{Id}/{Version}",
  urlParameters: [
    Parameters.version,
    Parameters.id,
    Parameters.name
  ],
  requestBody: {
    parameterPath: "operation",
    mapper: {
      ...Mappers.UnwrapKeyOperation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    400: {
      bodyMapper: Mappers.ValidationResult
    },
    401: {},
    404: {},
    default: {}
  },
  serializer
};

const verifyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/Certificates/Verify/{Name}/{Id}/{Version}",
  urlParameters: [
    Parameters.version,
    Parameters.id,
    Parameters.name
  ],
  requestBody: {
    parameterPath: "operation",
    mapper: {
      ...Mappers.VerifyOperation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    400: {
      bodyMapper: Mappers.ValidationResult
    },
    401: {},
    404: {},
    default: {}
  },
  serializer
};

const wrapKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/Certificates/WrapKey/{Name}/{Id}/{Version}",
  urlParameters: [
    Parameters.version,
    Parameters.id,
    Parameters.name
  ],
  requestBody: {
    parameterPath: "operation",
    mapper: {
      ...Mappers.WrapKeyOperation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    400: {
      bodyMapper: Mappers.ValidationResult
    },
    401: {},
    404: {},
    default: {}
  },
  serializer
};
