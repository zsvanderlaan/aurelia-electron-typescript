import {computedFrom} from 'aurelia-framework';
import ByteBuffer from 'bytebuffer'; 
import ProtoBuf from 'protobuf';

export class Dashboard {
  constructor()
  {
    console.log(ByteBuffer);
    console.log(ProtoBuf);
    
    //System.import()
        
    var bb = new ByteBuffer()
            .writeIString( "Hello world!" )
            .flip();
        console.log( bb.readIString() + " from bytebuffer.js" );

    var bytebuffer:ByteBuffer = new ByteBuffer();
  }
}