import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { useState } from 'react';

interface DynIconProps extends LucideProps {
  name: string;
}

const DynIcon: React.FC<DynIconProps> = ({ name, ...props }) => {
  const [brandFailed, setBrandFailed] = useState(false);
  const brandSlugs = new Set([
    'android', 'angular', 'dart', 'docker', 'express', 'figma', 'firebase', 'flutter',
    'github', 'git', 'graphql', 'linux', 'linkedin', 'nodedotjs', 'postgresql', 'postman',
    'prisma', 'react', 'supabase', 'typescript', 'vscode',
  ]);

  if (brandSlugs.has(name) && !brandFailed) {
    const color = typeof props.color === 'string' ? props.color.replace('#', '') : undefined;
    const deviconSources: Record<string, string> = {
      linkedin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
      vscode: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    };
    const src = deviconSources[name] ?? `https://cdn.simpleicons.org/${name}${color ? `/${color}` : ''}`;
    return (
      <img
        src={src}
        alt=""
        aria-hidden="true"
        width={props.size ?? 16}
        height={props.size ?? 16}
        onError={() => setBrandFailed(true)}
        style={{ display: 'inline-block', objectFit: 'contain' }}
      />
    );
  }

  const Icon = (LucideIcons as unknown as Record<string, React.FC<LucideProps>>)[name];
  if (!Icon) return <span style={{ width: props.size ?? 16, height: props.size ?? 16, display: 'inline-block' }} />;
  return <Icon {...props} />;
};

export default DynIcon;
