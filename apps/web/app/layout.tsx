// These styles apply to every route in the application
import '../styles/global.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
