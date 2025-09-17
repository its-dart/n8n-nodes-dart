import { NodeConnectionType, type INodeType, type INodeTypeDescription } from "n8n-workflow";
import { properties } from "./generated";

export class Dart implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Dart",
    name: "dart",
    icon: "file:dart.svg",
    group: ["transform"],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: "Dart streamlines project management so your team can get back to work that matters.",
    defaults: {
      name: "Dart",
    },
    usableAsTool: true,
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main],
    credentials: [{ name: "dartApi", required: true }],
    requestDefaults: {
      baseURL: "={{$credentials.url}}",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
    properties,
  };
}
