<template>
  <TmPage data-title="About" hide-header>
    <div class="card">
      <h1>About</h1>
      <p>
        🎉
        <router-link to="careers">
          We're Hiring!
        </router-link>
      </p>
      <h2 class="c5">
        What is Harmony Staking?
      </h2>
      <p>
        Harmony Staking is a user interface for sending and receiving One tokens,
        viewing your transaction history, delegating your ONEs, and
        participating in governance on the One Blockchain.
      </p>
      <p>
        Over the coming months we will be announcing a number of new products
        and services to make interacting with participant owned networks easier
        and more enjoyable.
      </p>
      <p>
        This software is developed by the team at Harmony Staking International Software
        Systems Inc. We're
        <a
          href="https://github.com/luniehq/lunie"
          target="_blank"
          rel="noopener norefferer"
        >
          open source
        </a>
        and independent.
      </p>
    </div>

    <div class="card">
      <h2 class="c5">
        Security
      </h2>
      <p>
        Harmony Staking is non-custodial. We believe that maintaining ownership over your
        keys is an important part of participating in these networks.
      </p>
      <p>
        <b>
          For your safety and security, Harmony Staking will not ask for or store your
          private keys or seed phrases.</b
        >
      </p>
      <p>
        To send transactions with Harmony Staking, you'll have to sign them with your
        Ledger Nano. If you don't have a Ledger Nano, you can
        <a
          href="https://shop.ledger.com/?r=3dd204ef7508"
          target="_blank"
          rel="noopener norefferer"
          >buy one here</a
        >.
      </p>
      <p>
        To learn more about our security policies on Harmony Staking, please visit our
        <router-link to="security"> security page </router-link>.
      </p>
    </div>

    <div class="card">
      <h2 class="c5">
        Team
      </h2>
      <div class="flex-row">
        <div class="profile">
          <img
            src="~assets/images/team/fabo.jpg"
            alt="Profile photo for Fabian Weber"
          />
          <div class="profile-info">
            <span>Fabian Weber</span>
            <span class="flag">🇩🇪</span>
          </div>
        </div>
        <div class="profile">
          <img
            src="~assets/images/team/jordan.jpg"
            alt="Profile photo for Jordan Bibla"
          />
          <div class="profile-info">
            <span>Jordan Bibla</span>
            <span class="flag">🇨🇦</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <h2 class="c5">
        Contact
      </h2>
      <p>
        Please let us know what you think! You can find us on
        <a
          href="https://github.com/cosmos/lunie"
          target="_blank"
          rel="noopener norefferer"
        >
          GitHub</a
        >
        and
        <a
          href="https://twitter.com/luniehq"
          target="_blank"
          rel="noopener norefferer"
          >Twitter</a
        >, email us at contact@lunie.io, or click the <i>feedback</i> button on
        the left.
      </p>
    </div>
  </TmPage>
</template>

<script>
import TmPage from "common/TmPage"

export default {
  name: `page-about`,
  components: {
    TmPage
  }
}
</script>

<style scoped src="../../styles/content-page.css"></style>
