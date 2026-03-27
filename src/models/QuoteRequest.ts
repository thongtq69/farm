import { Schema, model, models } from 'mongoose';

const QuoteRequestSchema = new Schema(
  {
    source: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    propertyType: { type: String, required: true, trim: true },
    investment: { type: String, required: true, trim: true }
  },
  {
    timestamps: true
  }
);

const QuoteRequest = models.QuoteRequest || model('QuoteRequest', QuoteRequestSchema);

export default QuoteRequest;
