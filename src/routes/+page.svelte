<script>
	import me from '$lib/images/me.png';
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import {
		ChevronDoubleUpOutline,
		ChevronDoubleDownOutline,
		ChevronUpSolid,
		ChevronDownSolid
	} from 'flowbite-svelte-icons';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="A web-app all about me" />
</svelte:head>

<section class="w-screen justify-center gap-x-4 bg-gray-100 py-4 xs:flex sm:hidden">
	<picture class="flex-none">
		<img class="object-center" alt="profile of me" src={me} />
	</picture>

	<div class="flex-initial self-center">
		<h1 class="text-center text-xl font-bold text-black">Adrian Van Nierop</h1>

		<h1 class="text-center text-xl font-bold text-black">Software Engineer</h1>
	</div>
</section>

<section class="justify-center gap-x-8 bg-gray-100 py-4 xs:hidden sm:flex">
	<h1 class="w-320 flex-initial self-center text-center text-xl font-bold text-black">
		Adrian Van Nierop
	</h1>

	<picture class="flex-none">
		<img class="object-center" alt="profile of me" src={me} />
	</picture>

	<h1 class="w-320 flex-initial self-center text-center text-xl font-bold text-black">
		Engineering Products
	</h1>
</section>

<section
	class="mt-8 flex w-screen gap-x-16 px-16 pb-8 xs:flex-col xs:justify-items-center md:flex-row md:justify-center"
>
	<div class="max-w-[840px] space-y-2 pb-8">
		<h2 class="text-3xl">Hello!</h2>

		<p class="pt-4">
			I am an impact-driven product and engineering leader with a passion for software development
			that has significant experience in strategic planning, product development and team
			leadership. With a strong technical background, I enjoy uncovering and developing innovative
			solutions for unmet customer needs. I'm an applied problem solver focusing on tangible
			solutions to real problems.
		</p>

		<h2 class="pt-4 text-3xl">Experience</h2>

		<Accordion>
			<AccordionItem>
				<div slot="header" class="w-full pr-8">
					<div class="mt-8 flex flex-row items-end justify-between">
						<h3 class="text-2xl text-blue-700">Software Product Engineer</h3>
						<h5 class="text-lg text-gray-500">Aug 2023 - Present</h5>
					</div>
					<h5 class="mb-2 text-gray-500">Frankie - Software to maintain properties at scale</h5>
					<!-- <p class="text-gray-700">
						Working as a Senior Software Engineer at Frankie a startup that helps automate and bring
						transparency to property maintenance at scale.
					</p> -->
				</div>

				<div slot="arrowup">
					<ChevronDoubleUpOutline class="-mr-0.5 h-3 w-3" />
				</div>
				<div slot="arrowdown">
					<ChevronDoubleDownOutline class="-mr-0.5 h-3 w-3" />
				</div>

				<h4 class="mb-2 mt-4 text-xl">Achievements I am most proud of:</h4>
				<ul class="list-outside list-disc space-y-1 pl-4 text-gray-700">
					<li>Increased website load speed through database query optimizations.</li>
					<li>
						Allowed facilities to compare maintenance costs, with partner properties, giving
						facilities managers competitive spending insights.
					</li>
				</ul>
			</AccordionItem>

			<AccordionItem open>
				<div slot="header" class="w-full pr-8">
					<div class="mt-8 flex flex-row items-end justify-between">
						<h3 class="text-2xl text-blue-700">Lead Product Engineer</h3>
						<h5 class="text-lg text-gray-500">Feb 2021 - Jun 2023</h5>
					</div>
					<h5 class="mb-2 text-gray-500">Colenso BBDO - Innovation and Creative Company</h5>
					<p class="text-gray-700">
						Working as a Lead Product Engineer at Colenso BBDO on the Mars Product Porfolio.
					</p>
				</div>

				<div slot="arrowup">
					<ChevronDoubleUpOutline class="-mr-0.5 h-3 w-3" />
				</div>
				<div slot="arrowdown">
					<ChevronDoubleDownOutline class="-mr-0.5 h-3 w-3" />
				</div>

				<Accordion>
					<AccordionItem open>
						<div slot="header" class="w-full pr-8">
							<h4 class="mt-4 text-xl font-semibold text-black">Mars Product Portfolio</h4>
							<h5 class="mb-2 text-gray-500">Apr 2022 - Jun 2023</h5>
						</div>

						<div slot="arrowup">
							<ChevronUpSolid class="-mr-0.5 h-3 w-3" />
						</div>
						<div slot="arrowdown">
							<ChevronDownSolid class="-mr-0.5 h-3 w-3" />
						</div>

						<p class="mt-4">
							Reporting directly to the Head of Innovation at Colenso, responsible for delivering a
							$5M digital portfolio of SAAS products for Mars, an American multinational
							manufacturer of confectionery, pet food, and other food products and a provider of
							animal care services. Many of the products delivered were greenfield and included the
							MyHooman animal shelter and adoption platform, Pedigree GoodPoints rewards program and
							Zevia naturally sweetened drinks. These products innovated their fields by using AI,
							Image recognition and Web3 technologies such as blockchain.
						</p>
						<p class="mt-4">
							I achieved this by setting product goals and KPIs and galvanising our rapidly growing
							team of designers and engineers through a servant leadership mentality to reach them
							with collaboration and customer empathy. I have been utilising agile tools and
							principles to help ensure the business focuses on the correct problems at the right
							time and works towards a common goal.
						</p>
						<h4 class="mb-2 mt-4 text-xl font-semibold">Key responsibilities:</h4>
						<ul class="list-outside list-disc space-y-1 pl-4 text-gray-700">
							<li>
								Led two multidisciplinary teams comprising frontend developers, backend developers,
								solution architects, product owners, UI/UX/CX designers and QA testers that
								designed, built, tested, and deployed digital products
							</li>
							<li>
								Balancing user needs with business impact and technical feasibility by working
								closely with product managers, product designers, engineers, quality assurance,
								DevOps and product marketers.
							</li>
							<li>
								Setting Product and Delivery Roadmaps and clearly articulating product vision,
								business goals and customer drivers to the wider team, including engineering,
								quality assurance, design, marketing and business.
							</li>
							<li>
								Broke down product roadmap goals into well-defined pieces of work and allocated them
								to team members
							</li>
							<li>Ensured the quality of output is high and technical debt is low.</li>
							<li>
								Setting technical standards, delivery and testing processes across teams, improving
								project uptake speed, maintenance and reducing bugs.
							</li>
							<li>Solutioning of technical architecture and data flows hosted in AWS and Azure.</li>
							<li>Writing and reviewing code in ReactJS, NextJS, Node.js, Express, and ASP.NET.</li>
							<li>Mentored and upskilled junior product owners and engineers.</li>
						</ul>
						<h4 class="mb-2 mt-4 text-xl font-semibold">Key achievements:</h4>
						<ul class="list-outside list-disc space-y-1 pl-4 text-gray-700">
							<li>
								Successfully advocated for and introduced Agile and Product thinking into the
								digital department, hugely improving output and impact.
							</li>
							<li>
								Successfully led both teams to deliver product features on time, meeting individual
								product KPIs.
							</li>
							<li>
								Solutioning of technical architecture and data flows that adhered to Mars technical
								standards.
							</li>
							<li>
								Proved the use of blockchain for recording customer transactions and balances,
								driving innovation and trust.
							</li>
							<li>
								Set technical standards across teams, improving project uptake speed and maintenance
								and reducing bugs.
							</li>
							<li>
								The creation of a UI design process that worked fluidly between design and
								development, improving solution turnaround.
							</li>
							<li>
								Using a data-centric approach and a better understanding of customers as individuals
								achieved the following.
							</li>
							<ul class="list-outside list-disc space-y-1 pl-4 text-gray-700 marker:text-gray-500">
								<li>Increased our on-site conversion by over 400%.</li>
								<li>Proved linking of off-site customer conversion using on-site promotions.</li>
								<li>Optimised our ad approach doubling conversion.</li>
								<li>
									Empowered customers to use their data to decrease business costs, saving thousands
									of dollars for businesses.
								</li>
								<li>
									Identified veterinary clinics as high-value customers and acquired them through
									discounted check-ups for newly adopted animals, driving conversion.
								</li>
							</ul>
							<li>
								Leveraged existing solutions to deliver a multi-regional B2C and B2B online store in
								3 months while delivering a bespoke user experience that talked to our client's
								brand and vision and met KPIs.
							</li>
						</ul>
					</AccordionItem>
					<AccordionItem>
						<div slot="header" class="w-full pr-8">
							<h4 class="mt-4 text-xl font-semibold text-black">Pedigree MyHooman Product</h4>
							<h5 class="mb-2 text-gray-500">Feb 2021 - Apr 2022</h5>
						</div>

						<div slot="arrowup">
							<ChevronUpSolid class="-mr-0.5 h-3 w-3" />
						</div>
						<div slot="arrowdown">
							<ChevronDownSolid class="-mr-0.5 h-3 w-3" />
						</div>

						<p class="mt-4">
							As an Engineering Manager for MyHooman, an online animal shelter and adoption platform
							for Mars, I was tasked with improving the development team and process so it would no
							longer be a loss-leading product. At the time of joining MyHooman, user acquisition
							and retention were low and dropping, and features came in over time and budget.
						</p>
						<blockquote class="mt-4 font-medium italic text-blue-500">
							<p>
								MyHoomans vision is to help every animal find their forever home, and it aims to be
								viable by reducing the acquisition cost of gaining new customers to below that of
								traditional marketing methods.
							</p>
						</blockquote>

						<h4 class="mb-2 mt-4 text-xl font-semibold">Responsibilities:</h4>
						<ul class="list-outside list-disc space-y-1 pl-4 text-gray-700">
							<li>
								Leading eight-plus individuals comprising frontend developers, backend developers,
								solution architects, product owners, UI/UX/CX designers and QA testers that
								designed, built, tested, and deployed MyHooman.
							</li>
							<li>
								Progress MyHooman to be profitable by reducing the cost of acquisition to below
								target.
							</li>
							<li>Make sure features are developed on time and within budget.</li>
							<li>Reduce bugs in production.</li>
							<li>Reduce team churn.</li>
							<li>
								Allocating work to team members and ensuring the quality of output is high and
								technical debt is low.
							</li>
							<li>Writing and reviewing code in ReactJS and ASP.NET.</li>
							<li>Solutioning of technical architecture and data flows hosted in Azure.</li>
							<li>Performance reviews and peer reviews of team members.</li>
						</ul>
						<h6 class="text-l mb-2 mt-4 text-lg font-semibold">
							Working with the development team, I identified the following areas for improvement:
						</h6>
						<ul class="list-outside list-disc space-y-1 pl-4 text-gray-700">
							<li>Lack of trust between the development team and management.</li>
							<li>No product roadmap or prioritised backlog.</li>
							<li>The development team did not understand the product vision or goals.</li>
							<li>Lack of a design process and empowered UX role.</li>
							<li>Lack of a defined test process and QA role.</li>
							<li>Incomplete features, bugs and poor site performance.</li>
							<li>
								A fragmented team split between frontend, backend, UI/UX design and CX design.
							</li>
							<li>Poor team morale.</li>
						</ul>
						<h6 class="text-l mb-2 mt-4 text-lg font-semibold">
							Over the next few months, I implemented the following solutions in order:
						</h6>
						<ul class="list-outside list-disc space-y-1 pl-4 text-gray-700">
							<li>
								Practised a servant leadership philosophy with team members, with openness and
								transparency, where anyone could ask any question.
							</li>
							<li>
								Setting a product roadmap, making it highly visible to all stakeholders, thus
								building trust through transparency, and ensuring everyone was working on the right
								problem.
							</li>
							<li>
								Turning the development team into a solution team by empowering them to find
								solutions that were measured by how they moved our KPIs, increasing the viability of
								what we delivered.
							</li>
							<li>Set code quality standards, branching strategies, and architecture patterns.</li>
							<li>Quantified technical debt and put time aside each sprint to tackle it.</li>
							<li>
								Implemented an Agile way of working with a clear definition of Done and Ready,
								allowing the team to have a say in what they delivered, increasing their morale.
							</li>
							<li>
								Combined the frontend, backend and UX/UI design teams into one combined team working
								off a single prioritised backlog, allowing faster creation of more desirable and
								feasible solutions.
							</li>
							<li>
								Created a dedicated QA role, testing process, and release pipeline, reducing bugs
								and customer churn.
							</li>
							<li>
								Created a true UX role within the team, allowing us to distinguish and optimise our
								UX and UI to meet the different needs of shelter managers and adopters.
							</li>
							<li>
								Worked to integrate MyHooman with Pet stores using cross-platform offers, driving
								acquisition and conversion.
							</li>
							<li>
								Leveraged AI to automate the writing of animal adoption profiles, saving shelters
								time and increasing the quality and accuracy of animal profiles.
							</li>
							<li>
								Leveraged Image recognition to automatically detect animal breeds, saving shelters
								time.
							</li>
						</ul>
					</AccordionItem>
				</Accordion>
			</AccordionItem>

			<AccordionItem>
				<div slot="header" class="w-full pr-8">
					<div class="mt-8 flex flex-row items-end justify-between">
						<h3 class="text-2xl text-blue-700">Product Owner</h3>
						<h5 class="text-lg text-gray-500">Jul 2020 - Feb 2021</h5>
					</div>
					<h5 class="mb-2 text-gray-500">ASB - Banking</h5>

					<p class="text-gray-700">
						Working at New Zealand's largest bank as a Product Owner, I created and delivered
						features to customers' online banking.
					</p>
				</div>

				<div slot="arrowup">
					<ChevronDoubleUpOutline class="-mr-0.5 h-3 w-3" />
				</div>
				<div slot="arrowdown">
					<ChevronDoubleDownOutline class="-mr-0.5 h-3 w-3" />
				</div>

				<p class="mt-4">
					A key feature we developed was allowing customers to change their physical addresses
					online, reducing a large portion of physical branch visits and lowering operational costs.
					Furthermore, with COVID disrupting branch availability, this feature was considered a high
					priority.
				</p>
				<p class="mt-4">
					Often a seemingly simple feature, as above, would touch multiple business areas such as
					credit cards, debit cards, bank accounts, and managed funds, each with its subsets of
					business rules. Adding to this complexity was ASB's digital infrastructure, which was vast
					and loosely coupled technically and data-wise. It had been built layer upon layer over
					decades, often without touching the underlying systems to meet current business
					requirements causing quirks and exceptions. Many times these subtle limitations were lost
					to institutional churn.
				</p>
				<h4 class="mb-2 mt-4 text-xl font-semibold">
					Working on the above feature, I performed the following duties:
				</h4>
				<ul class="list-outside list-disc space-y-1 pl-4 text-gray-700">
					<li>Set feature KPIs that fed into business KPIs.</li>
					<li>Identified all business areas that were touched and their business rules.</li>
					<li>Understood the technical ability of each of the identified systems.</li>
					<li>
						Working with an Agile cross-functional team, designed, developed and tested the feature.
					</li>
					<li>
						Working with the larger digital ecosystem of many product teams, we successfully
						released our feature alongside many other updates, ultimately meeting our KPIs.
					</li>
				</ul>
			</AccordionItem>

			<AccordionItem>
				<div slot="header" class="w-full pr-8">
					<div class="mt-8 flex flex-row items-end justify-between">
						<h3 class="text-2xl text-blue-700">Senior Product Owner and Team Lead</h3>
						<h5 class="text-lg text-gray-500">Nov 2017 - Jul 2020</h5>
					</div>
					<h5 class="mb-2 text-gray-500">Rush - Product Development Consultancy</h5>

					<p class="text-gray-700">
						I led multidisciplinary teams on some of Z-Energy's (NZ's largest fuel company) most
						innovative greenfield products, Sharetank and Pay-by-Plate, delivering breakthrough
						experiences. These teams were responsible for over a million dollars of the company's
						revenue, giving us a weighty responsibility.
					</p>
				</div>

				<div slot="arrowup">
					<ChevronDoubleUpOutline class="-mr-0.5 h-3 w-3" />
				</div>
				<div slot="arrowdown">
					<ChevronDoubleDownOutline class="-mr-0.5 h-3 w-3" />
				</div>

				<p class="mt-4">
					I predominately focused on the Sharetank, a groundbreaking Z-Energy product that allowed
					customers to pre-purchase fuel and draw down on it later. This product was a first for
					fuel companies and, as such, presented unique challenges, such as confidentiality
					requiring development to be separated from other products, identifying and mitigating
					fraud risks and the potential revenue loss to Z-Energy.
				</p>
				<h4 class="mb-2 mt-4 text-xl font-semibold">
					Below are some of the many tasks I performed:
				</h4>
				<ul class="list-outside list-disc space-y-1 pl-4 text-gray-700">
					<li>
						Ran multiple multidisciplinary product teams of six-plus individuals following Agile
						principles.
					</li>
					<li>
						Developed and reviewed code written in React Native and ASP.NET and hosted on Azure.
					</li>
					<li>Sized, costed and created roadmaps for Z Energy products.</li>
					<li>Technical Architecture and dataflow mapping for Z Energy products.</li>
					<li>
						Used computer vision to recognise vehicle number plates at an accuracy to be trusted by
						consumers nationwide.
					</li>
					<li>
						Balanced technical feasibility with business viability and user desirability to meet
						budget and timeline requirements.
					</li>
					<li>Followed a build, measure, learn philosophy.</li>
					<li>
						Set up analytics and data tracking to monitor product usage and transactions to identify
						fraud and mitigate risk.
					</li>
				</ul>
				<h4 class="mb-2 mt-4 text-xl font-semibold">Outcomes:</h4>
				<ul class="list-outside list-disc space-y-1 pl-4 text-gray-700">
					<li>Delivered Sharetank with zero overtime on time.</li>
					<li>Met Pay-by-Plate's and Sharetank's KPIs, proving its business worth.</li>
					<li>
						With the delivery of Sharetank, user engagement with the Z-Energy App increased 10-fold,
						and the app rating increased to over four stars.
					</li>
					<li>Won multiple Product design awards.</li>
				</ul>
			</AccordionItem>

			<AccordionItem>
				<div slot="header" class="w-full pr-8">
					<div class="mt-8 flex flex-row items-end justify-between">
						<h3 class="text-2xl text-blue-700">Software Engineer to Tech Lead</h3>
						<h5 class="text-lg text-gray-500">Dec 2011 - Nov 2017</h5>
					</div>
					<h5 class="mb-2 text-gray-500">Rush - Product Development Consultancy</h5>

					<p class="text-gray-700">
						While at Rush, I saw the company grow from 10 to over 100 employees and undergo two
						business model changes (Game development to Software Delivery, Software Delivery to
						Product Consultancy), resulting in a highly focused and successful company.
					</p>
				</div>

				<div slot="arrowup">
					<ChevronDoubleUpOutline class="-mr-0.5 h-3 w-3" />
				</div>
				<div slot="arrowdown">
					<ChevronDoubleDownOutline class="-mr-0.5 h-3 w-3" />
				</div>

				<p class="mt-4">
					During this time, I progressed from a Junior Developer to a Tech Lead, also supporting as
					a Sales Engineer. Often my work was done without oversight, and being self-motivated and
					tightly aligned with the company's goals was crucial to its economic success.
				</p>
				<p class="mt-4">
					Through these growth phases, I was responsible for scoping, developing, and delivering
					work across the full stack of the web, mobile and experiential applications with a strong
					focus on the user presentation layer.
				</p>
				<p class="mt-4">
					As a startup, most of our products had tight timelines and budgets, no room for errors,
					and an extremely low appetite for risk. I always had to balance user desirability,
					technical feasibility, and business viability, giving me a foundation in product ownership
					and delivery as a developer.
				</p>
				<h4 class="mb-2 mt-4 text-xl font-semibold">Key Responsibilities:</h4>
				<ul class="list-outside list-disc space-y-1 pl-4 text-gray-700">
					<li>
						Frontend development in Typescript, Java, Kotlin, Object-C and Swift with Android
						Native, iOS Native, React Native and React.
					</li>
					<li>Backend development in Typescript with NodeJS and Express and C# with ASP.NET.</li>
					<li>Augmented Reality Development in Unity.</li>
					<li>DevOps with Jenkins and AWS.</li>
					<li>
						Technical Architecture and dataflow mapping for solutions to new products and features.
					</li>
					<li>
						Cost estimating, timeline creation and team composition for new projects across frontend
						development, backend development, QA testing, and design.
					</li>
				</ul>
				<h4 class="mb-2 mt-4 text-xl font-semibold">Key Achievements:</h4>
				<ul class="list-outside list-disc space-y-1 pl-4 text-gray-700">
					<li>Promoted from Software Developer to Tech Lead.</li>
					<li>Worked with Google to build a digital swear jar using NLP.</li>
					<li>Worked with Google to create a mobility assistance app.</li>
					<li>
						Worked on an AR app, Monteith’s Beer Hunter, where users could hunt for their best beer
						match.
					</li>
					<li>Won multiple Product design awards.</li>
				</ul>
			</AccordionItem>
		</Accordion>

		<h2 class="pt-4 text-3xl">Hobbies</h2>
		<p>
			I enjoy swimming at new beaches and mountain biking when the weather is good. When it is
			gloomy outside, I read historical & science fiction and catch up on tech and product blogs. I
			like experimenting with new programming languages & frameworks and occasionally designing
			spaceships in my head.
		</p>
	</div>
	<!-- <div> -->
	<div class="xs:text-center md:max-w-[240px] md:text-left">
		<h2 class="text-3xl">Skills</h2>

		<h3 class="mb-2 mt-4 text-2xl text-blue-700">Product Management</h3>
		<ul class="list-inside list-none space-y-1 text-gray-700">
			<li>Vision and goal setting</li>
			<li>Product Roadmaps</li>
			<li>Pains and Gains Mapping</li>
			<li>Feature scoping & prioritisation</li>
			<li>KPI setting and tracking</li>
			<li>Product Growth funnels</li>
			<li>Design thinking</li>
			<li>Human-centred design</li>
			<li>User story mapping</li>
			<li>Productboard, Miro, Figma</li>
		</ul>

		<h3 class="mb-2 mt-4 text-2xl text-blue-700">Engineering Management</h3>
		<ul class="list-inside list-none space-y-1 text-gray-700">
			<li>Team forecasting</li>
			<li>Leadership and mentoring</li>
			<li>Delivery Roadmapping</li>
			<li>Agile, scum, kanban</li>
			<li>Behaviour-driven development</li>
			<li>Branching, testing, and delivery Strategies</li>
		</ul>

		<h3 class="mb-2 mt-4 text-2xl text-blue-700">Tech</h3>
		<ul class="list-inside list-none space-y-1 text-gray-700">
			<li>Solution Architecture</li>
			<li>AWS and Azure hosting</li>
			<li>Microservices</li>
			<li>AI, Image Recognition and NLP</li>
			<li>Data science and analysis</li>
			<li>CI/CD</li>
			<li>C4 Diagrams</li>
			<li>Swagger</li>
			<li>Rest and GraphQL</li>
			<li>ReactJS / NextJS</li>
			<li>GoLang</li>
			<li>Typescript, NodeJS</li>
			<li>Android & iOS</li>
		</ul>

		<h3 class="mb-2 mt-4 text-2xl text-blue-700">Analytics</h3>
		<ul class="list-inside list-none space-y-1 text-gray-700">
			<li>Google Analytics</li>
			<li>Google Tag Manager</li>
			<li>Firebase Analytics</li>
		</ul>

		<h3 class="mb-2 mt-4 text-2xl text-blue-700">Tools</h3>
		<ul class="list-inside list-none space-y-1 text-gray-700">
			<li>Jira</li>
			<li>Miro</li>
			<li>Figma</li>
			<li>Lucidchart</li>
		</ul>
	</div>
	<!-- </div> -->
</section>
