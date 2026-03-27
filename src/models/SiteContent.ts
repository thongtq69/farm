import { Schema, model, models } from 'mongoose';

const SiteContentSchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    data: {
      type: Schema.Types.Mixed,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const SiteContent = models.SiteContent || model('SiteContent', SiteContentSchema);

export default SiteContent;
