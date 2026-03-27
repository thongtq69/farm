import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    meta_description: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    gallery: { type: [String], default: [] },
    category: {
      type: String,
      required: true,
      enum: ['san-vuon-ho-koi', 'farm-du-lich-nghi-duong', 'da-nhan-tao-nghe-thuat']
    },
    info: {
      scale: { type: String, default: 'Farmstay & Homestay' },
      location: { type: String, default: 'Viet Nam' },
      completedYear: { type: String, default: '2022' },
      designConsulting: { type: String, default: 'Son Hai Landscape' }
    }
  },
  {
    timestamps: true
  }
);

const Project = models.Project || model('Project', ProjectSchema);

export default Project;
