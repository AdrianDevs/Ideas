<script>
	import me from '$lib/images/me.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="A web-app all about me" />
</svelte:head>

<section class="hidden justify-center gap-x-4 bg-gray-100 py-4 xs:flex sm:hidden">
	<picture class="flex-none">
		<img class="object-center" alt="profile of me" src={me} />
	</picture>

	<div class="flex-initial self-center">
		<h1 class="text-center text-xl font-bold text-black">Adrian Van Nierop</h1>

		<h1 class="text-center text-xl font-bold text-black">Software Engineer</h1>
	</div>
</section>

<section class="hidden justify-center gap-x-8 bg-gray-100 py-4 sm:flex">
	<h1 class="w-320 flex-initial self-center text-center text-xl font-bold text-black">
		Adrian Van Nierop
	</h1>

	<picture class="flex-none">
		<img class="object-center" alt="profile of me" src={me} />
	</picture>

	<h1 class="w-320 flex-initial self-center text-center text-xl font-bold text-black">
		Software Engineer
	</h1>
</section>

<section class="mx-4 mt-8 flex justify-center gap-x-16 xs:flex-col sm:flex-row">
	<div class="w-[880px] flex-initial space-y-2">
		<h2 class="text-3xl">Experience</h2>

		<div>
			<h3 class="mt-4 mb-2 text-2xl text-blue-700">Lead Product Engineer | Colenso BBDO</h3>
			<h5 class="mb-2 text-lg text-gray-500">2021 - Present</h5>
			<p>
				I lead a team as a Product Owner, and a Tech Lead for the MyHooman Digital Solution for
				Pedigree and Mars. I am working with a talented group to create a highly-functional,
				cross-discipline solution team by championing trust through transparency and openness.
			</p>
			<h4 class="mt-4 mb-2 text-xl">Achievements I am most proud of in my role:</h4>
			<ul class="list-inside list-disc space-y-1 text-gray-700">
				<li>Solution Architecture and data flow modelling</li>
				<li>Creation of roadmaps by sizing and solution features</li>
				<li>Balanced feasibility, desirability and viability day-to-day</li>
				<li>Introduced the team vision, goals and KPI tracking</li>
				<li>Addressed technical debt and managed ongoing refactoring</li>
				<li>Championed solution teams over delivery teams</li>
				<li>Successfully introduced agile ways of working</li>
				<li>Merged backend and frontend development streams</li>
				<li>Integrated UX and UI designers into the development team</li>
				<li>Set a briefing standard for the solution team</li>
				<li>Streamlined actioning user feedback</li>
				<li>Set the standard for documentation using user stories</li>
				<li>Introduced behaviour-driven development using Gherkin</li>
				<li>Achieved ISO compliance in the team</li>
				<li>Set a standard branching, testing and release strategy</li>
				<li>Continuously mentored and upskilled team members</li>
			</ul>
		</div>

		<div>
			<h3 class="mt-4 mb-2 text-2xl text-blue-700">Digital Experience Analyst | ASB</h3>
			<h5 class="mb-2text-lg text-gray-500">2020 - 2021</h5>
			<p>
				I’ve worked on allowing customers to personalise their online banking experience. I’ve
				delivered business-critical products where downtime and errors were not an option. In this
				role, I’ve learned how large enterprise companies run and what makes them tick.
			</p>
			<h4 class="mt-4 mb-2 text-xl">My day-to-day tasks in this role included:</h4>
			<ul class="list-inside list-disc space-y-1 text-gray-700">
				<li>Business requirements discovery</li>
				<li>Prioritising a product backlog of features</li>
				<li>Estimating delivery timelines</li>
				<li>Running agile ceremonies for a team of developers & testers</li>
				<li>
					Working with wider feature teams on releases to ensure all standards and procedures were
					followed
				</li>
			</ul>
		</div>

		<div>
			<h3 class="mt-4 mb-2 text-2xl text-blue-700">Senior Product Owner and Team Lead | Rush</h3>
			<h5 class="mb-2text-lg text-gray-500">2017 - 2020</h5>
			<p>
				I’ve worked with multidisciplinary teams on some of Z-Energy’s (NZ’s largest fuel company)
				most innovative products – Sharetank and Pay-by-Plate.
			</p>
			<h4 class="mt-4 mb-2 text-xl">My achievements and tasks from this role include:</h4>
			<ul class="list-inside list-disc space-y-1 text-gray-700">
				<li>Delivered a multi-million dollar product with zero overtime</li>
				<li>Solution and sized feature requests</li>
				<li>Followed a build, measure, learn philosophy</li>
				<li>Organised multiple product teams to work together</li>
				<li>Sized, cost & created road maps for Z Energy products</li>
				<li>Created delivery timelines</li>
				<li>Practised an agile way of working & continuous delivery</li>
				<li>Prioritised product features based on feasibility & user need</li>
				<li>Client and stakeholder management</li>
				<li>Mentored junior product owners</li>
				<li>Set and tracked KPIs</li>
			</ul>
		</div>

		<div>
			<h3 class="mt-4 mb-2 text-2xl text-blue-700">Software Engineer to Team Lead | Rush</h3>
			<h5 class="mb-2text-lg text-gray-500">2012 - 2017</h5>
			<p>
				I’ve progressed from a Junior Mobile Developer to a Team Lead. I went through the company's
				start-up phase, where I was responsible for scoping, developing and delivering work,
				teaching me the importance of strong product ownership.
			</p>
			<h4 class="mt-4 mb-2 text-xl">My achievements and tasks from this role include:</h4>
			<ul class="list-inside list-disc space-y-1 text-gray-700">
				<li>Worked with Google to build a digital swear jar</li>
				<li>Worked with Google to build a mobility assistance app</li>
				<li>
					Worked on the AR app Monteiths Beer Hunter, where users could hunt for their best beer
					match. This app was similar yet released before the Pokémon GO AR app.
				</li>
				<li>Developed native apps, web, AR, image detection & AI products.</li>
			</ul>
		</div>
	</div>

	<div class="grow-1 w-160 shrink pb-8">
		<h2 class="text-3xl">Skills</h2>

		<h3 class="mt-4 mb-2 text-2xl text-blue-700">Tech</h3>
		<ul class="list-inside list-none space-y-1 text-gray-700">
			<li>Solution Architecture</li>
			<li>AWS and Azure hosting</li>
			<li>Microservices</li>
			<li>C4 Diagrams</li>
			<li>Swagger</li>
			<li>Rest and GraphQL</li>
			<li>ReactJS</li>
			<li>GoLang</li>
			<li>ASP.NET</li>
			<li>Android & iOS</li>
		</ul>

		<h3 class="mt-4 mb-2 text-2xl text-blue-700">Product</h3>
		<ul class="list-inside list-none space-y-1 text-gray-700">
			<li>Vision and goal setting</li>
			<li>Feature scoping</li>
			<li>Feature road mapping</li>
			<li>KPI setting and tracking</li>
			<li>Design thinking</li>
			<li>Human-centred design</li>
			<li>User story mapping</li>
			<li>Agile ways of working</li>
			<li>Team leadership and Mentoring</li>
			<li>Stakeholder management</li>
		</ul>

		<h3 class="mt-4 mb-2 text-2xl text-blue-700">Delivery</h3>
		<ul class="list-inside list-none space-y-1 text-gray-700">
			<li>Behaviour-driven development</li>
			<li>Branching, Testing, and Delivery Strategies</li>
			<li>CI/CD</li>
		</ul>

		<h3 class="mt-4 mb-2 text-2xl text-blue-700">Analytics</h3>
		<ul class="list-inside list-none space-y-1 text-gray-700">
			<li>Google Analytics</li>
			<li>Google Tag Manager</li>
			<li>Firebase Analytics</li>
		</ul>

		<h3 class="mt-4 mb-2 text-2xl text-blue-700">Tools</h3>
		<ul class="list-inside list-none space-y-1 text-gray-700">
			<li>Jira</li>
			<li>Miro</li>
			<li>Figma</li>
			<li>Lucidchart</li>
		</ul>

		<h2 class="mt-4 mb-2 text-3xl">Hobbies</h2>
		<p>
			I enjoy swimming at new beaches and mountain biking when the weather is good. When it is
			gloomy outside, I read historical & science fiction and catch up on tech and product blogs. I
			like experimenting with new programming languages & frameworks and occasionally designing
			spaceships in my head.
		</p>

		<h2 class="mt-4 mb-2 text-3xl">References</h2>
		<p>Available upon request</p>
	</div>
</section>
