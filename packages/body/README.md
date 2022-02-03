---
title: Body
description: Provides correct styling for Markdown or CMS content.
group: Content
---

Many sites will have content being generated in a WYSIWIG or HTML field within a content management system. This content is inherently difficult to style as developers often times have limited control over the markup being generated in these editors. `Body` is designed to apply styling to make CMS content look ok.

This is also known as a Prose component.

```jsx live
<Box theme="light" background="body">
	<Body>
		<h1>Heading</h1>
		<p>
			This is an opening paragraph, that{' '}
			<a href="/site">contains an internal link</a>.
		</p>
		<img src="http://placehold.it/800x300" alt="Placeholder image" />
		<h2>Heading level 2</h2>
		<h3>Heading level 3, proceeding H2</h3>
		<p>
			The purpose of the <kbd>Tab</kbd> character is indentation; conversely,
			using the <kbd>Space</kbd> character for indentation carries no semantic
			meaning—if you code this way your indentation schema may as well be a form
			of{' '}
			<abbr title="American Standard Code for Information Interchange">
				ASCII
			</abbr>{' '}
			art. ;-)
		</p>
		<h3>Heading level 3</h3>
		<p>
			The <del>slow </del>quick brown fox jumped over the lazy dog. The{' '}
			<ins>ins (insert)</ins> element, unlike the dog cannot jump over anything,
			so it cannot span cross paragraph boundaries.
		</p>

		<p>
			This paragraph contains <s>outdated information</s> as well as current
			information.
		</p>
		<dl>
			<dt>Definition term</dt>
			<dd>
				A definition description: important information.{' '}
				<small>Less important information.</small>
			</dd>
			<dd>
				A second definition description.{' '}
				<small>
					Did you know?—a single definition term can have multiple definition
					(descriptions).
				</small>
			</dd>
			<dt>Single room</dt>
			<dd>
				$199{' '}
				<small>
					breakfast included, <abbr title="Goods and Services Tax">GST</abbr>{' '}
					inclusive
				</small>
			</dd>
			<dt>Double room</dt>
			<dd>
				$239{' '}
				<small>
					breakfast included, <abbr title="Goods and Services Tax">GST</abbr>{' '}
					inclusive
				</small>
			</dd>
		</dl>
		<p>
			We can also have single definitions, used for terms upon their first
			occurence in a document:
		</p>
		<h5>Heading level 5</h5>
		<p>
			While they are essential reading material for our job, the{' '}
			<dfn>
				<abbr title="World Wide Web Consortium">W3C</abbr>
			</dfn>{' '}
			specifications are not exactly George R. R. Martin-level reading material.
		</p>
		<p>
			Now to the <code>mark</code> element. This has a few useful applications:
		</p>
		<ul>
			<li>
				useful for marking up interesting things in quotations (without altering
				the styling of text, eg to italic)
			</li>
			<li>
				drawing attention to specific parts of pre-formatted text (eg code
				snippets)
			</li>
			<li>for marking up search results (eg that match a given query)</li>
		</ul>
		<h6>Heading level 6</h6>
		<p>
			I also have some <mark>kitten</mark>s who are visiting me these days.
			They’re really cute. I think they like my garden! Maybe I should adopt a{' '}
			<mark>kitten</mark>.
		</p>
		<p>
			How to install this component <code>npm i @gov.au/body</code>
		</p>
		<p>The highlighted part below is where the error lies:</p>
		<pre>
			<code>
				var i: Integer; begin i := <mark>1.1</mark>; end.
			</code>
		</pre>
		<p>An unordered list containing an ordered list:</p>
		<ul>
			<li>Canberra office</li>
			<li>Sydney office</li>
			<li>
				Foo item, with sub-items:
				<ol>
					<li>one</li>
					<li>two</li>
					<li>three</li>
				</ol>
			</li>
			<li>Bar</li>
			<li>Baz</li>
		</ul>
		<p>A simple ordered list:</p>
		<ol>
			<li>Discovery</li>
			<li>Alpha</li>
			<li>Beta</li>
			<li>Live</li>
		</ol>
		<p>Back to a paragraph.</p>
		<hr />
		<p>And that's a wrap.</p>
	</Body>
</Box>
```
