'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { site, therapies } from '@/lib/content';

type FieldErrors = Partial<Record<'name' | 'phone' | 'consent', string>>;
export function ConsultationForm() {
 const [ready, setReady] = useState('');
 const [errors, setErrors] = useState<FieldErrors>({});
 const therapySelect = useRef<HTMLSelectElement>(null);
 useEffect(() => {
  const requested = new URLSearchParams(window.location.search).get('therapy');
  if (therapySelect.current && therapies.some(item => item.slug === requested)) therapySelect.current.value = requested!;
 }, []);
 function prepare(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  if (data.get('website')) return;
  const name = String(data.get('name') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const digits = phone.replace(/\D/g, '');
  const next: FieldErrors = {};
  if (!name) next.name = 'Please enter your name.';
  if (!/^\+?[\d\s()-]+$/.test(phone) || digits.length < 7 || digits.length > 15) next.phone = 'Enter a phone number with 7–15 digits, including your country code if needed.';
  if (!data.get('consent')) next.consent = 'Please agree to share your enquiry through WhatsApp.';
  setErrors(next);
  setReady('');
  const invalid = Object.keys(next)[0];
  if (invalid) {
   (form.elements.namedItem(invalid) as HTMLElement | null)?.focus();
   return;
  }
  const support = therapies.find(item => item.slug === String(data.get('therapy')))?.name || 'I’d like some guidance';
  const text = `Hello UNICA, I’d like to enquire about a consultation.\nName: ${name}\nPhone: ${phone}\nSupport: ${support}\n${String(data.get('message') || '').trim()}`;
  setReady(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`);
 }
 return <form className="enquiry-form" noValidate onSubmit={prepare} onChange={() => { setReady(''); setErrors({}); }}>
  <span className="eyebrow">A welcoming first conversation</span>
  <h3>Tell us a little about yourself.</h3>
  <p id="enquiry-guidance">Prepare an enquiry, then review and send it in WhatsApp. Our team will discuss availability with you before confirming an appointment.</p>
  <div className="form-row">
   <div className="form-field"><label htmlFor="enquiry-name">Your name <span aria-hidden="true">*</span></label><input id="enquiry-name" name="name" autoComplete="name" maxLength={100} required placeholder="Parent or caregiver’s name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}/>{errors.name && <p className="field-error" id="name-error">{errors.name}</p>}</div>
   <div className="form-field"><label htmlFor="enquiry-phone">Phone number <span aria-hidden="true">*</span></label><input id="enquiry-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={25} required placeholder="Your contact number" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined}/>{errors.phone && <p className="field-error" id="phone-error">{errors.phone}</p>}</div>
  </div>
  <div className="form-field"><label htmlFor="enquiry-therapy">How can we support you?</label><select id="enquiry-therapy" name="therapy" ref={therapySelect} defaultValue="guidance"><option value="guidance">I’d like some guidance</option>{therapies.map(item => <option value={item.slug} key={item.slug}>{item.name}</option>)}</select></div>
  <div className="form-field"><label htmlFor="enquiry-message">Your message <span className="optional">(optional)</span></label><textarea id="enquiry-message" name="message" maxLength={1000} rows={3} aria-describedby="message-guidance" placeholder="Share your questions"/><p className="field-help" id="message-guidance">Please avoid medical records or sensitive information about your child.</p></div>
  <div className="honeypot" aria-hidden="true"><label htmlFor="enquiry-website">Leave this blank</label><input id="enquiry-website" name="website" tabIndex={-1} autoComplete="off"/></div>
  <label className="consent"><input type="checkbox" name="consent" required aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'consent-error' : undefined}/><span>I agree to share these details with UNICA through WhatsApp. <Link href="/privacy">Privacy information</Link></span></label>
  {errors.consent && <p className="field-error" id="consent-error">{errors.consent}</p>}
  <button className="button" type="submit" aria-describedby="enquiry-guidance">Prepare WhatsApp enquiry <ArrowUpRight size={18}/></button>
  <div aria-live="polite" aria-atomic="true">{ready && <div className="form-result"><MessageCircle size={21}/><div>Your message is ready. Nothing has been sent yet.<a href={ready} target="_blank" rel="noopener noreferrer">Review &amp; send in WhatsApp <ArrowUpRight size={16}/></a></div></div>}</div>
 </form>;
}
