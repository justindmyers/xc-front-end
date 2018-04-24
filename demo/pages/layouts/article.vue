<template>
    <div class="container container-fluid">
        <h1 class="page-heading">Article Layout</h1>

        <div class="row">
            <article class="col-md-8 l-article">
                <header class="l-article__header">
                    <aha-share hide-text></aha-share>

                    <div class="l-article__meta">
                        <div>Last Updated: <time datetime="2017-10-26">Oct 26, 2017</time></div>
                        <div class="h-color--green">Last Reviewed: October 2017</div>
                    </div>

                    <hr />

                    <h1 class="h2">Arrythmia</h1>
                </header>

                <div class="l-article__main">
                    <p>The term "arrhythmia" refers to any change from the normal sequence of electrical impulses. The electrical impulses may happen too fast, too slowly, or erratically – causing the heart to beat too fast, too slowly, or erratically. When the heart doesn't beat properly, it can't pump blood effectively. When the heart doesn't pump blood effectively, the lungs, brain and all other organs can't work properly and may shut down or be damaged.</p>
                    <p>The normal heart is a strong, muscular pump a little larger than a fist. It pumps blood continuously through the circulatory system.</p>

                    <ul>
                        <li>Each day the average heart beats (expands and contracts) 100,000 times and pumps about 2,000 gallons of blood through the body.</li>
                        <li>In a 70-year lifetime, an average human heart beats more than 2.5 billion times.</li>
                    </ul>

                    <h3>Understand how the heart pumps</h3>
                    <p class="h4 h-color--gray">Structure of the heart: Four Chambers, Four Valves</p>

                    <p>The heart has four chambers, two on the right and two on the left:</p>

                    <ul>
                        <li>Two upper chambers are called atria (one is called an atrium).</li>
                        <li>Two lower chambers are called ventricles.</li>
                    </ul>

                    <p>The heart also has four valves that open and close to let blood flow in only one direction when the heart contracts (beats). The four heart valves are:</p>

                    <ul>
                        <li>Tricuspid valve, located between the right atrium and right ventricle</li>
                        <li>Pulmonary or pulmonic valve, between the right ventricle and the pulmonary artery</li>
                        <li>Mitral valve, between the left atrium and left ventricle</li>
                        <li>Aortic valve, between the left ventricle and the aorta</li>
                    </ul>

                    <figure class="float-right col-md-6">
                        <figcaption class="h4">
                            <a href="#">Watch an animation of heart valve anatomy</a>
                        </figcaption>
                        <img src="//placehold.it/400x300" alt="" />
                    </figure>

                    <p>Each valve has a set of flaps (also called leaflets or cusps). The mitral valve has two flaps; the others have three. Blood flow occurs only when there's a difference in pressure across the valves, which causes them to open. Under normal conditions, the valves permit blood to flow in only one direction.</p>

                    <p>The heart pumps blood to the lungs and to all the body's tissues by a sequence of highly organized contractions of the four chambers. For the heart to function properly, the four chambers must beat in an organized way.</p>
                </div>
            </article>

            <div class="col-md-4">
                <nav class="l-article__widget">
                    <ul class="l-article-list">
                        <li class="l-article-list__item">
                            <aha-article-toc></aha-article-toc>
                        </li>

                        <li class="l-article-list__item">
                            <aha-article-toc></aha-article-toc>
                        </li>
                    </ul>
                </nav>

                <aside class="l-article__widget">
                    <h3 class="l-article__widget-heading c-label c-label--green c-label--wide">Popular Articles</h3>

                    <aha-article-medium></aha-article-medium>
                </aside>
            </div>
        </div>
    </div>
</template>
