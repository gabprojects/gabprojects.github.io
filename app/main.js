const btnInicio = document.querySelector("#inicio");
const btnPerfil = document.querySelector("#perfil");
const btnHabilidades = document.querySelector("#habilidades");
const btnAcademico = document.querySelector("#academico");
const btnContato = document.querySelector("#contato");

const btnControlInicio = document.querySelector("#inicioControl");
const btnControlPerfil = document.querySelector("#perfilControl");
const btnControlHabilidades = document.querySelector("#habilidadesControl");
const btnControlAcademico = document.querySelector("#academicoControl");
const btnControlContato = document.querySelector("#contatoControl");

const btnComeco = document.querySelector("#botaoComecar");

const secaoInicio = document.querySelector("#inicioSecao");
const secaoPerfil = document.querySelector("#perfilSecao");
const secaoHabilidades = document.querySelector("#habilidadesSecao");
const secaoAcademico = document.querySelector("#academicoSecao");
const secaoContato = document.querySelector("#contatoSecao");

const sections = [
  secaoInicio,
  secaoPerfil,
  secaoHabilidades,
  secaoAcademico,
  secaoContato,
];

const buttons = [
  btnInicio,
  btnPerfil,
  btnHabilidades,
  btnAcademico,
  btnContato,
  btnControlInicio,
  btnControlPerfil,
  btnControlHabilidades,
  btnControlAcademico,
  btnControlContato
]

const sectionsMap = new Map([
  [secaoInicio, [btnInicio, btnControlInicio]],
  [secaoPerfil, [btnPerfil, btnControlPerfil]],
  [secaoHabilidades, [btnHabilidades, btnControlHabilidades]],
  [secaoAcademico, [btnAcademico, btnControlAcademico]],
  [secaoContato, [btnContato, btnControlContato]],
])

function scrollTo(section) {
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetButtonClasses(){
  buttons.forEach((button) => button.classList.remove('_ativo'));
}

btnInicio.addEventListener("click", () => scrollTo(secaoInicio));
btnPerfil.addEventListener("click", () => scrollTo(secaoPerfil));
btnHabilidades.addEventListener("click", () => scrollTo(secaoHabilidades));
btnAcademico.addEventListener("click", () => scrollTo(secaoAcademico));
btnContato.addEventListener("click", () => scrollTo(secaoContato));
btnComeco.addEventListener("click", () => scrollTo(secaoPerfil));

btnControlInicio.addEventListener("click", () => scrollTo(secaoInicio));
btnControlPerfil.addEventListener("click", () => scrollTo(secaoPerfil));
btnControlHabilidades.addEventListener("click", () =>
  scrollTo(secaoHabilidades)
);
btnControlAcademico.addEventListener("click", () => scrollTo(secaoAcademico));
btnControlContato.addEventListener("click", () => scrollTo(secaoContato));

document.addEventListener("scroll", (event) => {

  const filterSections = sections.filter(section => {
    const sectionPosition = section.getBoundingClientRect().top - document.documentElement.clientHeight / 2 - 56;
    return sectionPosition <= 0;
  })

  resetButtonClasses();

  const currentSection = filterSections[filterSections.length - 1];

  sectionsMap.get(currentSection).forEach((button) => button.classList.add('_ativo'));

});
