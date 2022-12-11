<!DOCTYPE html>
<html lang="es">
  <head>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-135545927-1"
    ></script>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Santi Bello</title>
    <link rel="shortcut icon" href="{{ site.baseurl }}/assets/img/favicon.ico" />
    <link rel="icon" href="{{ site.baseurl }}/assets/img/favicon.ico" />
    <link rel="stylesheet" type="text/css"href="{{ site.baseurl }}/assets/home.css" />
  </head>
  <body>
    <nav>
      <a href="{{ site.baseurl }}/" >HOME</a>
    </nav>
    <main class="blog">
      <header >
        <date>{{ page.date | date_to_long_string }} - {{ content | reading_time }}</date>
        <h2 class="blog-title">{{ page.title }}</h2>
        <h5 class="blog-subtitle">{{ page.subtitle }}</h5>
      </header>
      <article >
        {{ content | new_line_to_br }}
      </article>
      <div>
      <div class="PageNavigation">
        {% if page.previous.url %}
          <a class="prev" href="{{page.previous.url}}">&laquo; {{page.previous.title}}</a>
        {% endif %}
        {% if page.next.url %}
          <a class="next" href="{{page.next.url}}">{{page.next.title}} &raquo;</a>
        {% endif %}
      </div>
    </main>
    <footer>
      <p>
        <a href="{{ site.baseurl }}/" >© Santi Bello {{ "now" | date: "%Y" }}</a>
      </p>
     <div>_</div>
    </footer>
  </body>
</html>