import { redirect } from 'next/navigation';

export const metadata = {
  robots: { index: false, follow: true },
};

export default function RedirectToORA() {
  redirect('/insights/what-is-ora-machine');
}
