import { Schema, model, models } from 'mongoose';

const ReelSchema = new Schema(
  {
    category: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    thumbnail: { type: String, required: true, trim: true },
    videoUrl: { type: String, trim: true, default: null }
  },
  {
    timestamps: true
  }
);

const Reel = models.Reel || model('Reel', ReelSchema);

export default Reel;
