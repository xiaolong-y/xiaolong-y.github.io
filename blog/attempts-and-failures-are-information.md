---
layout: "page"
title: "Attempts and failures are information"
description: "A probabilistic note on learning from attempts, updating beliefs, and planning what to try next."
analytics: true
---

# Attempts and failures are information

<p class="quiet">09 Dec 2025</p>

<script>
  window.MathJax = {
    tex: {
      inlineMath: [["$", "$"], ["\\(", "\\)"]],
      displayMath: [["$$", "$$"], ["\\[", "\\]"]]
    },
    svg: {
      fontCache: "global"
    }
  };
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>

Note to self on learning and taking actions. Will rewrite it when I understand it deeper, one day.  

**Attempt process.**

$$
\begin{align*}
X_t &\in \{0,1\}, \quad t = 1,2,\dots \\
\mathbb{P}(X_t = 1 \mid p) &= p, \\
\mathbb{P}(X_t = 0 \mid p) &= 1-p, \\
X_1, X_2, \dots &\text{ i.i.d.}
\end{align*}
$$

**Aggregates after $n$ attempts.**

$$
\begin{align*}
S_n &= \sum_{t=1}^n X_t, \\
F_n &= n - S_n, \\
\hat p_n &= \frac{S_n}{n}.
\end{align*}
$$

**Probability of at least one success in $n$ attempts.**

$$
\begin{align*}
P_n(p) &= \mathbb{P}(S_n \ge 1 \mid p)
       = 1 - (1-p)^n.
\end{align*}
$$

**Bayesian update.**

$$
\begin{align*}
p &\sim \mathrm{Beta}(\alpha_0,\beta_0), \\
p \mid X_{1:n} &\sim \mathrm{Beta}(\alpha_0 + S_n,\; \beta_0 + F_n), \\
\tilde p_n &:= \mathbb{E}[p \mid X_{1:n}]
           = \frac{\alpha_0 + S_n}{\alpha_0 + \beta_0 + n}.
\end{align*}
$$

**Target planning.**

$$
\begin{align*}
q &\in (0,1), \\
n^*(p,q)
&:= \min\left\{n \in \mathbb{N} :
1 - (1-p)^n \ge q \right\} \\
&= \left\lceil \frac{\log(1-q)}{\log(1-p)} \right\rceil.
\end{align*}
$$

**Plug-in rule for next block size.**

$$
\begin{align*}
\tilde p_n &\in \{\hat p_n,\; \mathbb{E}[p \mid X_{1:n}]\}, \\
n_{n+1}^{\text{plan}} &= n^*(\tilde p_n, q).
\end{align*}
$$

**Change-of-strategy indicator.**

$$
\begin{align*}
p_{\min} &\in (0,1), \\
I_n &:= \mathbf{1}\{\tilde p_n < p_{\min}\}.
\end{align*}
$$
