import type {
  IAuthenticateGeneric,
  Icon,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from "n8n-workflow";

export class DartApi implements ICredentialType {
  name = "dartApi";
  displayName = "Dart API";
  documentationUrl = "https://help.dartai.com/en/articles/12313191-n8n-node-setup";
  icon: Icon = "file:../nodes/Dart/dart.svg";
  properties: INodeProperties[] = [
    {
      displayName: "Dart API URL",
      name: "url",
      type: "hidden",
      default: "https://app.dartai.com/api/v0/public",
      required: true,
    },
    {
      displayName: "API Token",
      name: "apiToken",
      type: "string",
      placeholder: "dsa_...",
      default: "",
      required: true,
      typeOptions: { password: true },
    },
    {
      displayName:
        "Get the token from your Dart account " +
        "<a href='https://app.dartai.com/home?settings=account' target='_blank'>here</a><b>" +
        ".",
      default: "",
      name: "operation",
      type: "notice",
    },
  ];

  authenticate: IAuthenticateGeneric = {
    type: "generic",
    properties: {
      headers: {
        Authorization: "=Bearer {{$credentials.apiToken}}",
      },
    },
  };

  test: ICredentialTestRequest = {
    request: {
      baseURL: "={{$credentials.url}}",
      url: "/config",
    },
  };
}
