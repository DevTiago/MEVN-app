<template>
  <div class="crypto-wrapper mt-3">
    <h3 class="text-center">
      Cryptocurrency<b-icon-arrow-clockwise
        id="refresh"
        class="mx-4"
        @click="getBitcoins"
      ></b-icon-arrow-clockwise>
    </h3>

    <b-table-simple
      hover
      outlined
      striped
      responsive
      class="text-center"
      v-if="!onProgress"
    >
      <b-thead head-variant="light">
        <b-tr>
          <b-th>Rank</b-th>
          <b-th>Coin</b-th>
          <b-th>Symbol</b-th>
          <b-th>Price</b-th>
          <b-th>1h</b-th>
          <b-th>24h</b-th>
          <b-th>7d</b-th>
          <b-th>Last Update</b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <b-tr
          v-for="bitcoin in bitcoins[0]"
          v-bind:key="bitcoin.index"
          class="p-5"
        >
          <b-td>{{ bitcoin.data.market_cap_rank }}</b-td>
          <b-td>
            <img :src="bitcoin.data.image.thumb" alt="" />
            {{ bitcoin.data.name }}
          </b-td>

          <b-td>{{ bitcoin.data.symbol.toUpperCase() }}</b-td>

          <b-td>{{
            new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(bitcoin.data.market_data.current_price.eur)
          }}</b-td>

          <b-td
            v-bind:class="[
              Math.sign(
                bitcoin.data.market_data.price_change_percentage_1h_in_currency
                  .eur
              ) === 1
                ? 'positivePercent'
                : 'negativePercent',
              ,
            ]"
            >{{
              setPercentage(
                bitcoin.data.market_data.price_change_percentage_1h_in_currency
                  .eur
              )
            }}
            %</b-td
          >

          <b-td
            v-bind:class="[
              Math.sign(
                bitcoin.data.market_data.price_change_percentage_24h
              ) === 1
                ? 'positivePercent'
                : 'negativePercent',
              ,
            ]"
            >{{
              setPercentage(
                bitcoin.data.market_data.price_change_percentage_24h
              )
            }}
            %</b-td
          >

          <b-td
            v-bind:class="[
              Math.sign(
                bitcoin.data.market_data.price_change_percentage_7d_in_currency
                  .eur
              ) === 1
                ? 'positivePercent'
                : 'negativePercent',
              ,
            ]"
            >{{
              setPercentage(
                bitcoin.data.market_data.price_change_percentage_7d_in_currency
                  .eur
              )
            }}
            %</b-td
          >

          <b-td>
            {{ setDateTime(bitcoin.data.market_data.last_updated) }}
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <div class="text-center" v-else>
      <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "Crypto",
  data() {
    return {
      bitcoins: [],
      onProgress: false,
      timer: null,
    };
  },

  methods: {
    getBitcoins() {
      this.onProgress = true;
      this.bitcoins = [];

      let bitcoinUrl = "https://api.coingecko.com/api/v3/coins/bitcoin";
      let etherumUrl = "https://api.coingecko.com/api/v3/coins/ethereum";
      let tetherUrl = "https://api.coingecko.com/api/v3/coins/tether";

      const promise1 = axios.get(bitcoinUrl);
      const promise2 = axios.get(etherumUrl);
      const promise3 = axios.get(tetherUrl);

      Promise.all([promise1, promise2, promise3])
        .then((values) => {
          this.bitcoins.push(values);
        })
        .then(() => (this.onProgress = false))
        .catch((err) => console.log(err));
    },

    setDateTime(timedate) {
      return moment(timedate).format("YYYY-MM-DD HH:mm:ss");
    },

    setPercentage(percent) {
      return percent.toFixed(2);
    },
  },

  mounted() {
    this.getBitcoins();
  },
};
</script>

<style lang="scss" scoped>
.positivePercent {
  color: green;
}

.negativePercent {
  color: red;
}

#refresh {
  &:hover {
    cursor: pointer;
  }
}
</style>