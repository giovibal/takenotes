syntax = "proto3";

package takenotes.v1;

import "google/api/annotations.proto";
import "google/protobuf/timestamp.proto";

service {{.Name}}sService {
  rpc Create{{.Name}}(Create{{.Name}}Request) returns (Create{{.Name}}Response) {
    option (google.api.http) = {
      post: "/v1/{{.NameLowerCase}}s"
      body: "*"
    };
  }

  rpc Update{{.Name}}(Update{{.Name}}Request) returns (Update{{.Name}}Response) {
    option (google.api.http) = {
      put: "/v1/{{.NameLowerCase}}s/{item.id}"
      body: "*"
    };
  }

  rpc Delete{{.Name}}(Delete{{.Name}}Request) returns (Delete{{.Name}}Response) {
    option (google.api.http) = {delete: "/v1/{{.NameLowerCase}}s/{id}"};
  }

  rpc Get{{.Name}}(Get{{.Name}}Request) returns (Get{{.Name}}Response) {
    option (google.api.http) = {get: "/v1/{{.NameLowerCase}}s/{id}"};
  }

  rpc Search{{.Name}}s(Search{{.Name}}sRequest) returns (stream Search{{.Name}}sResponse) {
    option (google.api.http) = {get: "/v1/{{.NameLowerCase}}s"};
  }
}

message Create{{.Name}}Request {
  {{.Name}} item = 1;
}

message Create{{.Name}}Response {
  bool success = 1;
  {{.Name}} item = 2;
}

message Update{{.Name}}Request {
  {{.Name}} item = 1;
}

message Update{{.Name}}Response {
  bool success = 1;
  {{.Name}} item = 2;
}

message Delete{{.Name}}Request {
  string id = 1;
}

message Delete{{.Name}}Response {
  bool success = 1;
  string deleted_id = 2;
}

message Get{{.Name}}Request {
  string id = 1;
}
message Get{{.Name}}Response {
  {{.Name}} item = 1;
}

message Search{{.Name}}sRequest {
  string query = 1;
  optional string next_page_token = 2;
}

message Search{{.Name}}sResponse {
  {{.Name}} item = 1;
}

message {{.Name}} {
  string id = 1;
  google.protobuf.Timestamp created_at = 2;
  google.protobuf.Timestamp updated_at = 3;
  string name = 4;
}
