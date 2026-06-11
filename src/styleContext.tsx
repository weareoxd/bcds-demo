import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { styleMaps, type StyleMode, type Styles } from './styles';

interface StyleContextValue {
  mode: StyleMode;
  setMode: (mode: StyleMode) => void;
  s: Styles;
}

const StyleContext = createContext<StyleContextValue>({} as StyleContextValue);

const BOOTSTRAP_CDN = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css';

export function StyleProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<StyleMode>('tailwind');

  useEffect(() => {
    if (mode !== 'bootstrap') {
      document.getElementById('bootstrap-cdn')?.remove();
      return;
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = BOOTSTRAP_CDN;
    link.id = 'bootstrap-cdn';
    document.head.appendChild(link);
    return () => link.remove();
  }, [mode]);

  return (
    <StyleContext.Provider value={{ mode, setMode, s: styleMaps[mode] }}>
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle() {
  return useContext(StyleContext);
}
