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

  $: modal_view = false;
  $: chose = 0;

  let html = document.getElementById("html");

  function modal(n) {
    modal_view = true;
    chose = n;
    html.classList.add("is-clipped");
  }

  function close() {
    modal_view = false;
    chose = 0;
    html.classList.toggle("is-clipped");
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
          <h2 class="subtitle is-4">Mottola | Papenburg | El Molar</h2>
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
      <div
        class="content has-text-justified px-6 pt-6 pb-0 m-0"
        class:px-6={!mobile}
        class:px-3={mobile === true}
      >
        <h2 class="title is-size-3">Project information:</h2>
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
      <div
        class="columns pb-6 pt-5 is-vcentered"
        class:px-6={!mobile}
        class:px-3={mobile === true}
      >
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
<div class="section is-medium is-relative pt-0">
  <h2 class="title has-text-centered is-2">Schools:</h2>
  <div class="container">
    <div id="school" class="columns is-relative">
      <div class="column">
        <div
          class="card card-modal is-clickable"
          on:click|preventDefault={() => modal(1)}
        >
          <div class="card-image">
            <figure class="image is-16by9">
              <img src={mottola} alt="Mottola" />
            </figure>
          </div>
          <div
            class="card-content is-flex is-flex-direction-column is-align-items-center is-justify-content-center p-4"
          >
            <img src={logo_it} alt="" class="mb-3" />
            <p class="has-text-link is-size-7 mb-0 pb-0">
              Project Leader <i class="fa-solid fa-crown fa-beat" />
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card card-modal is-clickable" on:click={() => modal(2)}>
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
      </div>
      <div class="column">
        <div
          class="card card-modal is-clickable"
          on:click|preventDefault={() => modal(3)}
        >
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
      </div>
    </div>
  </div>
  {#if modal_view}
    {#if chose === 1}
      <div class="modal is-active">
        <div class="modal-background" on:click={close} />
        <div class="modal-card">
          <div class="modal-card-head">
            <p
              class="modal-card-title is-size-4 is-size-6-mobile has-text-centered"
            >
              I.S.I.S.S. M.LENTINI - A.EINSTEIN (Mottola)
            </p>
            <button class="delete" aria-label="close" on:click={close} />
          </div>
          <div class=" modal-card-body">
            <div class="content has-text-justified mt-3 is-size-6">
              <p class="mb-2">
                The Higher Secondary Education School IPSS "M. Lentini" - L.S.
                "A. Einstein" of Mottola provides the following training
                courses:
              </p>
              <ul class="mt-0">
                <li>
                  TECHNICAL SCHOOL, technology sector, with the following aims:
                  <ol class="mt-0">
                    <li>Graphics and communication;</li>
                    <li>Chemistry, materials and biotechnology.</li>
                  </ol>
                </li>
                <li>
                  PROFESSIONAL SCHOOL, services sector, with the following aim:
                  <ol class="mt-0">
                    <li>Health and social care services</li>
                  </ol>
                </li>
                <li>SCIENTIFIC HIGH SCHOOL</li>
                <li>SCIENTIFIC HIGH SCHOOL with Applied Sciences</li>
                <li>LINGUISTIC HIGH SCHOOL</li>
              </ul>
              <p>
                The primary objective of this school is to train citizens who,
                in addition to possessing good cultural foundations, according
                to the Constitution, are users of new technologies and foreign
                languages, are aware of the rights / duties of active
                citizenship, have human dignity, freedom and respect the others
                and believe in the democratic coexistence with other citizens as
                a fundamental value.
              </p>
              <p>
                The identity and purposes of the school, the way in which it is
                seen and perceived, are the cornerstone of the organization of
                the training activity. Aware of the responsibilities assigned to
                it by society and the STATE, the school knows that it cannot
                carry out its function in isolation, but must relate positively
                to the family and other territorial educational realities. The
                ISSIS "Lentini-Einstein", composed of different addresses: HIGH
                SCHOOL, TECHNICAL and PROFESSIONAL, aggregates an equally
                different audience for training, interests, conditions and
                values. The Institute is called to enhance complexity, which is
                never a limit, but an opportunity to promote qualified actions,
                thus elevating student training.
              </p>
            </div>
          </div>
          <div class="modal-card-foot is-flex is-justify-content-center p-3">
            <a
              class="button is-link"
              href="http://www.lentinieinstein-mottola.edu.it/"
              target="_blank"
              rel="noopener noreferrer">School site</a
            >
          </div>
        </div>
      </div>
    {:else if chose == 2}
      <div class="modal is-active">
        <div class="modal-background" on:click={close} />
        <div class="modal-card">
          <div class="modal-card-head">
            <p
              class="modal-card-title is-size-4 is-size-6-mobile has-text-centered"
            >
              MARIENGYMNASIUM PAPENBURG
            </p>
            <button class="delete" aria-label="close" on:click={close} />
          </div>
          <div class=" modal-card-body">
            <div class="content has-text-justified mt-3 is-size-6">
              <p>
                Mariengymnasium Papenburg is a school for girls sponsored by the
                school foundation in the Diocese of Osnabrück.<br /> Education and
                professional training at the Mariengymnasium has been assessed for
                many years in collaboration with the Employment Agency and many regional
                partners.
              </p>
              <p class="mb-2">
                The main elements of the different stages are as follows:
              </p>
              <p>
                YEAR 10 <br /> In the classes of the 10th year there is a
                90-minute orientation by the Employment Agency.<br /> A career counselor
                from the employment office develops the aspects of application deadlines,
                career opportunities and opportunities for self-exploration and finding
                a job. In January / February, all schoolchildren complete a two-week
                internship. It is important that there is a professional environment
                that is desirable for high school graduates and that full-time work
                is possible in order to get a realistic impression of everyday work.
              </p>
              <p>
                YEAR 11 <br /> For the whole year there will be a lecture by the
                Employment Agency on the subject of “Abitur and then what?”.<br
                />
                The pupils are encouraged to take an online perspective test for
                self-exploration and finding a job with evaluation by the Ruhr University
                in Bochum.<br />
                In the half-year holidays, the now traditional study and professional
                information day for the 11th year of the Mariengymnasium and the
                Gymnasium Papenburg with approx. 20 offers from niversities, companies
                and individual speakers from several professional fields takes place.
                Although participation has been voluntary for some years, approximately
                80% of the students take advantage of this opportunity.
              </p>
              <p>
                YEAR 12 <br /> Another lecture by the Employment Agency provides
                information about application deadlines and procedures.<br />
                Interested pupils can take a field-specific counseling test (SFBT).
                The test is aimed at students who already know in which area they
                want to study. Under the guidance of psychologists from the employment
                agency, subject-specific requirements are set here, which are also
                exemplary for selection procedures at universities.<br /> There are
                also cross-year offers, such as the opportunity for individual advice
                from the Employment Agency every other Tuesday of the month. In addition,
                the students can leave the upper grades on two days to attend university
                information days.
              </p>
            </div>
          </div>
          <div class="modal-card-foot is-flex is-justify-content-center p-3">
            <a
              class="button is-link"
              href="https://www.mgpapenburg.com/"
              target="_blank"
              rel="noopener noreferrer">School site</a
            >
          </div>
        </div>
      </div>
    {:else if chose == 3}
      <div class="modal is-active">
        <div class="modal-background" on:click={close} />
        <div class="modal-card">
          <div class="modal-card-head">
            <p
              class="modal-card-title is-size-6 has-text-centered"
              class:small-text={mobile === true}
            >
              ISTITUTO DE EDUCACIÓN SECUNDARIA CORTES DE CÁDIZ (El Molar)
            </p>
            <button class="delete" aria-label="close" on:click={close} />
          </div>
          <div class=" modal-card-body">
            <div class="content has-text-justified mt-3 is-size-6">
              <p>
                IES Cortes de Cádiz is a Bilingual Secondary School providing
                Compulsory Secondary Education (ESO) for students aged 12 to 16.
                The purpose of Compulsory Secondary Education is to ensure that
                students acquire the basic elements of culture, especially in
                its humanistic, artistic, scientific and technological aspects;
                develop and consolidate study and work habits in them; prepare
                them for their incorporation into later studies and for their
                labor insertion and train them for the exercise of their rights
                and obligations in life as citizens.
              </p>
              <p>
                Science and Social-Humanities Bachillerato for students aged 16
                to 18. It is not mandatory and provides students with training,
                maturity, knowledge and skills, both to join active life and to
                access higher education.
              </p>
              <p>
                And a Basic Professional Training Course in Cooking and
                Restoration whose purpose is to ensure that students acquire
                corresponding professional competencies with professional
                qualifications of level 1 defined by INCUAL, prepare them for
                their incorporation to followingstudies and for their labor
                insertion, as well as train them for the exercise of their
                rights and obligations in life as citizens .In addition to the
                general objectives and objectives established for vocational
                education, Basic Vocational Training will help students acquire
                or complete the skills of lifelong learning.
              </p>
            </div>
          </div>
          <div class="modal-card-foot is-flex is-justify-content-center p-3">
            <a
              class="button is-link"
              href="https://www.educa2.madrid.org/web/iescortesdecadiz.es"
              target="_blank"
              rel="noopener noreferrer">School site</a
            >
            <a
              class="button is-success"
              href="https://loidagarrido.wixsite.com/"
              target="_blank"
              rel="noopener noreferrer">Their Erasmus+ site</a
            >
          </div>
        </div>
      </div>
    {/if}
  {/if}
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
