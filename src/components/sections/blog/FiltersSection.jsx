const filters = ['Tous', 'Innovation', 'Réussite', 'Événements', 'Pédagogie'];

export default function FiltersSection({ activeFilter, setActiveFilter }) {
  return (
    <section style={{ paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-2 fw-medium"
              style={{
                backgroundColor: filter === activeFilter ? 'var(--cetmb-primary)' : '#ffffff',
                color: filter === activeFilter ? '#ffffff' : 'var(--cetmb-primary)',
                border: `1px solid var(--cetmb-primary)`,
                borderRadius: 0,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
