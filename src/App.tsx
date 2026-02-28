import { useState, useEffect } from 'react'; 
import Header from './components/Header'; 
import Sidebar from './components/Sidebar'; 
import MainContent from './components/MainContent'; 
  
interface Project { id: string; name: string; color: string; } 
interface Column { id: string; title: string; tasks: string[]; } 
  
export default function App() { 
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]); 
  const [columns, setColumns] = useState<Column[]>([]); 
  const [loading, setLoading] = useState(true); 
  
  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProject(projectId);
    console.log('Projet sélectionné:', projectId);
    setSidebarOpen(false); // Close sidebar after selection
  }; 
  
  useEffect(() => {
    console.log('useEffect déclenché !');
    async function fetchData() { 
      try { 
        const [projRes, colRes] = await Promise.all([ 
          fetch('http://localhost:3000/projects'), 
          fetch('http://localhost:3000/columns'), 
        ]); 
        const projData = await projRes.json();
        const colData = await colRes.json();
        
        console.log('Projets:', projData);
        console.log('Colonnes:', colData);
        
        setProjects(projData);
        setColumns(colData);
      } catch (error) { 
        console.error('Erreur:', error); 
      } finally { 
        setLoading(false); 
      } 
    } 
    fetchData(); 
  }, []);  // [] = une seule fois au montage 
  
  if (loading) return <div style={{padding:'2rem'}}>Chargement...</div>; 
  
  return ( 
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header title="TaskFlow" onMenuClick={handleMenuClick} />
      <Sidebar projects={projects} isOpen={sidebarOpen} onSelectProject={handleSelectProject} selectedProjectId={selectedProject} />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <MainContent columns={columns} />
      </div>
    </div> 
  ); 
} 