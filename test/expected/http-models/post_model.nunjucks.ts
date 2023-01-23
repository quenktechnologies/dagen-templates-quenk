/**
 * AUTOGENERATED, DO NOT EDIT DIRECTLY!
 */

import * as http from '@quenk/jouvert/lib/app/model/http';
import * as json from '@quenk/noni/lib/data/jsonx';
import { Agent } from '@quenk/jhr/lib/agent';

/**
 * PostHttpModel remote model (AUTOGENERATED).
 */
export class PostHttpModel 
  extends 
  http.HttpModel<Post> {

  static paths = {"search":"/r/posts/search","get":"/r/posts/{id}"}

  constructor(public agent: Agent<json.Object, json.Object>) {
    super(agent,  new http.RequestFactory(PostHttpModel.paths));
  }


  create(id: Id,data: Comment) : Future<string> {
  

  }

}
