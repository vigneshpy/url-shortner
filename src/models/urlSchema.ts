import mongoose from 'mongoose';
import { Document } from 'mongoose';const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


 interface UrlDocument extends Document {
  longUrl: string;
  shortUrl: string;
  clicks: number;
}

 const Url = mongoose.model('url-details', urlSchema);

 export { UrlDocument, Url}