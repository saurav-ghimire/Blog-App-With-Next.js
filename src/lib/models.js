const { default: mongoose } = require("mongoose");



const userSchema = new mongoose.Schema({ 
  username:{
    type:String,
    required:true,
    min:3,
    max:20,
    unique:true
  },
  email:{
    type:String,
    required:true,
    min:6,
    max:50,
    unique:true
  },
  password:{
    type:String,
    min:6,
    required:true
  },
  img:{
    type:String
  },
  isAdmin:{
    type:Boolean,
    default:false
  }
}, {timeStamp:true});

const PostSchema = new mongoose.Schema({ 
  title:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  img:{
    type:String
  },
  userID:{
    type:String,
    required:true
  }
}, {timeStamp:true});


export const User = mongoose.models.user || mongoose.model("User", userSchema)
export const Post = mongoose.models.post || mongoose.model("Post", PostSchema)