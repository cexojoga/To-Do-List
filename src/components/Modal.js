function Modal() {
  if (deleteModal)
    return (
      <div className="deleteModal">
        <button
          className="modalButtonClose"
          onClick={() => setDeleteModal(false)}
        >
          X
        </button>
        <div className="modalTitle">
          Seguro que quieres eliminar esta tarea?
        </div>
        <button
          className="modalButton"
          onClick={() => {
            const deletetasks = tasks.filter(
              (task) => task.id !== taskAboutToDelete
            );
            setTasks(deletetasks);
            setDeleteModal(false);
          }}
        >
          Eliminar
        </button>
      </div>
    );
}
