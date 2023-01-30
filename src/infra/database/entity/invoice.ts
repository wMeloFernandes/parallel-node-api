import mongoose, { Schema, Document } from 'mongoose';

export interface IInvoice extends Document {
  company_name: string;
  price_in_cents: number;
  issue_date: Date;
}

const InvoiceSchema: Schema = new Schema({
  company_name: { type: String, required: true },
  price_in_cents: { type: Number, required: true},
  issue_date: { type: Date, required: true }
});

export default mongoose.model<IInvoice>('Invoice', InvoiceSchema);
