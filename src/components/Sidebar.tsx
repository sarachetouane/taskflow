import styles from './Sidebar.module.css'; 
  
interface Project { id: string; name: string; color: string; } 
interface SidebarProps { projects: Project[]; isOpen: boolean; onSelectProject?: (projectId: string) => void; selectedProjectId?: string | null; } 
  
export default function Sidebar({ projects, isOpen, onSelectProject, selectedProjectId }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <h2 className={styles.title}>Mes Projets</h2>
      <ul className={styles.list}>
        {projects.map(p => (
          <li 
            key={p.id} 
            className={`${styles.item} ${p.id === selectedProjectId ? styles.selected : ''}`}
            onClick={() => onSelectProject?.(p.id)}
          >
            <span className={styles.dot} style={{ background: p.color }} />
            {p.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
