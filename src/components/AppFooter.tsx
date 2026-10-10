interface AppFooterProps {
  courseName: string;
}

export function AppFooter({ courseName }: AppFooterProps) {
  return (
    <footer className="app-footer">
      <div className="app-footer_content">
        <p>Administrador de tareas — {courseName}</p>
      </div>
    </footer>
  );
}