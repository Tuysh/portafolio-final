document.addEventListener('DOMContentLoaded', () => {
  const proyectosDesarrollados = [
    {
      nombre: 'Pardalis: Plataforma de Aprendizaje de Inglés',
      rol: 'Líder de Proyecto & Desarrollador Principal',
      stack: ['Svelte', 'TailwindCSS', 'MySQL', 'Golang', 'Gorilla Mux'],
      descripcion: 'Desarrollo de una plataforma completa para el aprendizaje de inglés, con gestión de usuarios, sistema de progreso y logros, panel administrativo y diseño responsivo.',
      links: {
        codigoFuente: 'https://gitlab.com/pardalis',
        imagen: 'img/proyectos/pardalis.webp'
      }
    },
    {
      nombre: 'Script de Descuentos XML',
      rol: 'Desarrollador',
      stack: ['python', 'XML'],
      descripcion: 'Script diseñado para procesar múltiples transacciones aplicando descuentos dinámicos. Incluye validación en tiempo real y manejo eficiente de archivos XML.',
      links: { imagen: 'img/proyectos/descuentos.webp' }
    },
    {
      nombre: 'Simulador de Campo Eléctrico',
      rol: 'Desarrollador Frontend',
      stack: ['HTML', 'CSS', 'ELM', 'JS'],
      descripcion: 'Simulador interactivo para visualizar campos eléctricos en tiempo real, con cálculos dinámicos y una interfaz intuitiva.',
      links: {
        codigoFuente: 'https://codeberg.org/HeNew4/campo-electrico',
        imagen: 'img/proyectos/fisica.webp'
      }
    },
    {
      nombre: 'AniSun',
      rol: 'Desarrollador Full-Stack',
      stack: ['React', 'CSS', 'JavaScript', 'ExpressJS'],
      descripcion: 'Plataforma para ver y organizar animes mediante la recopilación de enlaces. Permitía subir enlaces de contenido a un servidor y reproducirlos en una interfaz amigable.',
      links: { imagen: 'img/proyectos/anisun.webp' }
    },
    {
      nombre: 'Notas del Profesor',
      rol: 'Desarrollador Frontend',
      stack: ['HTML', 'TailwindCSS', 'JavaScript'],
      descripcion: 'Aplicación tipo router sin servidor para gestionar las notas de clases de un profesor, permitiendo la visualización y organización de las calificaciones de los estudiantes.',
      links: { imagen: 'img/proyectos/notas.webp' }
    },
    {
      nombre: 'create-paket-app',
      rol: 'Desarrollador',
      stack: ['JavaScript', 'SWC', 'Rollup'],
      descripcion: 'Herramienta de empaquetado minimalista para compilar código JavaScript, compatible con Node.js y navegadores web. Permite crear proyectos con estructura organizada, compilación rápida y minificación eficiente.',
      links: {
        codigoFuente: 'https://codeberg.org/HeNew4/Paket-App',
        imagen: 'img/proyectos/paket.webp'
      }
    },
    {
      nombre: 'Diagram Web',
      rol: 'Desarrollador',
      stack: ['TypeScript', 'React', 'TailwindCSS'],
      descripcion: 'Herramienta para crear diagramas de física interactivos, diseñada para facilitar la visualización de conceptos fundamentales en cinetica, estatica. (Todavia en desarrollo)',
      links: {
        imagen: 'img/proyectos/diagramas.webp'
      }
    }
  ]

  const iconMapping = {
    react: { prefix: 'fab', icon: 'fa-react', color: 'text-blue-400' },
    tailwindcss: { prefix: 'fa-brands', icon: 'fa-css', color: 'text-teal-400' },
    mysql: { prefix: 'fas', icon: 'fa-database', color: 'text-orange-400' },
    golang: { prefix: 'fab', icon: 'fa-golang', color: 'text-cyan-500' },
    gin: { prefix: 'fas', icon: 'fa-server', color: 'text-green-500' },
    html: { prefix: 'fab', icon: 'fa-html5', color: 'text-orange-500' },
    css: { prefix: 'fab', icon: 'fa-css3-alt', color: 'text-blue-500' },
    'javascript (vanilla)': { prefix: 'fab', icon: 'fa-js', color: 'text-yellow-500' },
    javascript: { prefix: 'fab', icon: 'fa-js', color: 'text-yellow-500' },
    typescript: { prefix: 'fab', icon: 'fa-js', color: 'text-blue-500' },
    python: { prefix: 'fab', icon: 'fa-python', color: 'text-yellow-500' }
  }

  if ('content' in document.createElement('template')) {
    const proyectos = document.querySelector('#proyectos')
    const proyectoTemplate = document.querySelector('#proyecto')

    for (const proyecto of proyectosDesarrollados) {
      const clone = proyectoTemplate.content.cloneNode(true)

      clone.querySelector('h3').textContent = proyecto.nombre
      clone.querySelector('img').setAttribute('src', proyecto.links.imagen)
      clone.querySelector('#rol').textContent = proyecto.rol
      clone.querySelector('.ver-detalles').addEventListener('click', () => abrirModal(proyecto))

      proyecto.stack.forEach(e => {
        const key = e.toLowerCase().trim()
        const { prefix, icon, color } = iconMapping[key] || { prefix: 'fas', icon: 'fa-code', color: 'text-gray-400' }
        const html = `<div class="bg-gray-800/50 px-3 py-1 rounded-full text-sm text-white flex items-center"><i class="${prefix} ${icon} ${color} mr-2"></i> ${e}</div>`

        clone.querySelector('#stack').innerHTML += html
      })

      proyectos.appendChild(clone)
    }
  } else {
    console.error('No se pudo cargar los proyectos :(')
  }

  /* === Habilidades Tabs :D === */

  const tabs = document.querySelectorAll('.skill-tab')
  const contents = document.querySelectorAll('.skill-content')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active')
        t.classList.remove('bg-gray-900')
        t.classList.remove('text-white')
        t.classList.remove('hover:bg-gray-800')
        t.classList.add('bg-gray-200')
        t.classList.add('text-gray-700')
        t.classList.add('hover:bg-gray-300')
      })
      contents.forEach(c => c.classList.add('hidden'))

      tab.classList.add('active')
      tab.classList.remove('bg-gray-200')
      tab.classList.remove('text-gray-700')
      tab.classList.remove('hover:bg-gray-300')
      tab.classList.add('bg-gray-900')
      tab.classList.add('text-white')
      tab.classList.add('hover:bg-gray-800')

      const target = tab.getAttribute('data-tab')
      document.getElementById(target).classList.remove('hidden')
    })
  })

  /* === Formulario === */

  const form = document.querySelector('form')
  const mailto = document.querySelector('#correo')

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    const dataForm = new FormData(this)

    mailto.setAttribute('href', `mailto:angelmaclovio@yahoo.com?subject=${dataForm.get('nombre')}&body=${dataForm.get('mensaje')}`)
    mailto.click()
  })

  const modal = document.getElementById('project-modal')
  const cerrarModalBtn = modal.querySelector('.cerrar-modal')

  function abrirModal (proyecto) {
    modal.querySelector('.modal-nombre').textContent = proyecto.nombre
    modal.querySelector('.modal-rol').textContent = proyecto.rol
    modal.querySelector('.modal-stack').innerHTML = proyecto.stack.map(tech => `
            <div class="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800">
                ${tech}
            </div>
        `).join('')
    modal.querySelector('.modal-descripcion').textContent = proyecto.descripcion
    modal.querySelector('.modal-links').innerHTML = proyecto.links.codigoFuente
      ? `
            <a href="${proyecto.links.codigoFuente}" target="_blank" class="text-blue-500 hover:text-blue-700">
                <i class="fas fa-code mr-2"></i>Código Fuente
            </a>
        `
      : ''
    modal.classList.remove('hidden')
    modal.classList.add('flex')
  }

  cerrarModalBtn.addEventListener('click', () => modal.classList.add('hidden'))
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden')
  })
})
