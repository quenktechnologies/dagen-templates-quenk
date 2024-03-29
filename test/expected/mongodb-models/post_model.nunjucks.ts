/**
 * AUTOGENERATED - DO NOT EDIT DIRECTLY!
 */
import * as mongodb from 'mongodb';
import { BaseModel } from '@quenk/backend/lib/app/db/mongodb/model';


export {
  PostModel as ModelImpl,
  Post as DataType
}

/**
 * PostModelModel for Post (AUTOGENERATED).
 */
export class PostModel extends BaseModel<Post> {

  constructor(
    public name: string,
    public database: mongodb.Db,
    public collection : mongodb.Collection) { super(database, collection); }

    id = 'id';


    create(
    

): Future<string> {
  

  }

  static getInstance (db: mongodb.Db) : PostModel {

    return new PostModel('posts', db, db.collection('posts'));

  }

}

