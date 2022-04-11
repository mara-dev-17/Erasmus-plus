<script>
  import src from "../assets/connections.svg";
  import mottola from "../assets/Einstein.jpg";
  import Papenburg from "../assets/Papenburg.jpg";
  import Elmolar from "../assets/Elmolar.jpg";
  import Teacher_Ita from "../assets/Teacher_ita.jpg";
  import Teacher_Gr from "../assets/Teacher_gr.jpg";
  import Teacher_Sp from "../assets/Teacher_sp.jpg";
  import world from "../assets/world.svg";
  import logo_it from "../assets/lentini-einstein-logo.jpg";
  import logo_gr from "../assets/maryengymasium-papen.jpg";
  import logo_sp from "../assets/CORTES-DE-CADIZ-LOGO.jpg";

  let mobile = true;

  var window_width = window.innerWidth;

  window.addEventListener("resize", function () {
    window_width = window.innerWidth;
  });

  $: if (window_width <= 768) {
    mobile = true;
  } else {
    mobile = false;
  }
</script>

<div class="hero is-fullheight-with-navbar is-primary">
  <div class="hero-body">
    <div class="columns is-vcentered is-justify-content-center p-3">
      <div class="column is-6">
        <div
          class="hero-content container"
          class:has-text-centered={mobile === true}
          class:ml-6={!mobile}
          class:mb-5={mobile === true}
        >
          <h1 class="title has-text-weight-bold is-1">BE YOUropean!</h1>
          <h2 class="subtitle is-4">Mottola | Papenburg | El moral</h2>
        </div>
      </div>
      <div class="column is-5" class:ml-6={!mobile}>
        <figure class="image">
          <img src={world} alt="" />
        </figure>
      </div>
    </div>
  </div>
</div>
<div id="info" class="section is-medium has-background-primary pt-0 pb-1">
  <div class="container">
    <div class="box">
      <div class="content has-text-justified px-6 pt-6 pb-0 m-0">
        <h2 class="title is-size-3">Project informations:</h2>
        <p>
          The project <strong>"BE YOUropean"</strong> is a 24-month-European
          project based on the <strong>Exchange of Good Practices</strong>,
          involving schools from <strong>Italy, Germany and Spain</strong>. The
          project is based on the need for development, transfer and
          implementation of innovative practices at organisational, national and
          European levels. In particular, it will aim at fostering social,
          educational and personal development, as well as participation in
          civic and social life.
          <br />
          The aims of this project are: to strenghten the European dimension in all
          the participating schools, promoting the common values of freedom, inclusion,
          tolerance and non-discrimination through the development of shared Key
          Competences, Digital Competences and Basic Skills.
          <br />
          It can be considered an innovative project, as it will be based on the
          shared aim to become 'Citizens of Europe', in terms of a better knowledge
          of other countries' culture, traditions and history, both regarding its
          common features and differences. The final result of the project will be
          reached sharing the solid values of an intercultural and globalized youth,
          in terms of a lifelong education and cooperation among the Eu -Countries.
          <br />
          The planned activities will include:
          <strong
            >lessons, guided tours of relevant historical and cultural sites and
            workshops</strong
          >
          aimed at getting deeper into the culture and history of each host country,
          developing partnerships and cooperation among learning institutions. In
          particular, each activity will aim at facilitating the recognition of knowledge,
          skills and competences acquired through formal, non-formal and informal
          learning.
          <br />
          The expected concrete results of the project will be tangible in terms
          of an increased understanding and responsiveness to social, ethnic, linguistic
          and cultural diversity; more active participation in EU society; more positive
          attitude towards the European project and the EU values through a better
          knowledge of its past and recent history.
        </p>
      </div>
      <div class="columns px-6 pb-6 pt-5 is-vcentered">
        <div class="column is-6" class:mb-5={mobile === true}>
          <p>
            <bold class="has-text-weight-semibold"
              >Main objective of the project:</bold
            > Exchange of Good Practices
          </p>
          <p>
            <bold class="has-text-weight-semibold">Project ID:</bold> KA229-A2B94C18
          </p>
          <p>
            <bold class="has-text-weight-semibold">Project Title:</bold> BE YOUropean!
          </p>
          <p>
            <bold class="has-text-weight-semibold">Project Acronym:</bold> BY!
          </p>
          <p>
            <bold class="has-text-weight-semibold">Project Start Date:</bold> 01-09-2019
          </p>
          <p>
            <bold class="has-text-weight-semibold">Project Total Duration:</bold
            > 24 months
          </p>
          <p>
            <bold class="has-text-weight-semibold">Project End Date:</bold> 31-08-2021
          </p>
          <p>
            <bold class="has-text-weight-semibold"
              >National Agency of the Applicant Organisation:</bold
            > IT02 Agenzia Nazionale Erasmus+ - INDIRE
          </p>
          <p>
            <bold class="has-text-weight-semibold">Language used:</bold> English
          </p>
          <a
            class="button  is-link mt-3"
            href="https://ec.europa.eu/programmes/erasmus-plus/contact"
            target="_blank">Contact Erasmus+</a
          >
        </div>
        <div class="dolumn is-5">
          <img {src} alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
<svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
  ><path
    fill="#0077C8"
    fill-opacity="1"
    d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,101.3C672,85,768,107,864,133.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
  /></svg
>
<div class="section is-medium pt-0">
  <h2 class="title has-text-centered is-2">Schools:</h2>
  <div class="container">
    <div id="school" class="columns">
      <div class="column">
        <div class="card card-modal is-clickable">
          <div class="card-image">
            <figure class="image is-16by9">
              <img src={mottola} alt="Mottola" />
            </figure>
          </div>
          <div
            class="card-content is-flex is-align-items-center is-justify-content-center p-4"
          >
            <img src={logo_it} alt="" />
          </div>
        </div>
      </div>
      <div class="column">
        <a
          href="https://www.mgpapenburg.com/"
          target="_blank"
          class="card-link"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-16by9">
                <img src={Papenburg} alt="Papenburg" />
              </figure>
            </div>
            <div
              class="card-content is-flex is-align-items-center is-justify-content-center p-4"
            >
              <img src={logo_gr} alt="" />
            </div>
          </div>
        </a>
      </div>
      <div class="column">
        <a
          href="https://www.educa2.madrid.org/web/iescortesdecadiz.es"
          target="_blank"
          class="card-link"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-16by9">
                <img src={Elmolar} alt="Elmolar" />
              </figure>
            </div>
            <div
              class="card-content is-flex is-align-items-center is-justify-content-center p-4"
            >
              <img src={logo_sp} alt="" />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
<div class="section is-small has-text-centered prof">
  <p class="title p-6 is-2">Teachers:</p>
  <div class="columns">
    <div
      class="column"
      class:my-3={mobile === true}
      class:py-6={mobile === true}
    >
      <div
        class="box is-flex is-justify-content-center is-flex-direction-column is-align-items-center"
      >
        <figure class="image is-128x128">
          <img src={Teacher_Ita} alt="" class="is-rounded" />
        </figure>
        <p class="title">Katya Putignano</p>
        <p class="subtitle">Coordinator</p>
      </div>
    </div>
    <div
      class="column"
      class:my-3={mobile === true}
      class:py-6={mobile === true}
    >
      <div
        class="box is-flex is-justify-content-center is-flex-direction-column is-align-items-center"
      >
        <figure class="image is-128x128">
          <img src={Teacher_Gr} alt="" class="is-rounded" />
        </figure>
        <p class="title">Bernd Seitz</p>
        <p class="subtitle">German partner</p>
      </div>
    </div>
    <div
      class="column"
      class:my-3={mobile === true}
      class:py-6={mobile === true}
    >
      <div
        class="box is-flex is-justify-content-center is-flex-direction-column is-align-items-center"
      >
        <figure class="image is-128x128">
          <img src={Teacher_Sp} alt="" class="is-rounded" />
        </figure>
        <p class="title">Loida Garrido</p>
        <p class="subtitle">Spanish partner</p>
      </div>
    </div>
  </div>
</div>
