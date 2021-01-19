<template>
  <div class="crypto-wrapper mt-3">
    <h3 class="text-center">Cryptocurrency</h3>
    <b-table-simple hover small caption-top responsive>
      <b-thead head-variant="light">
        <b-tr>
          <b-th>Rank</b-th>
          <b-th>Coin</b-th>
          <b-th>Symbol</b-th>
          <b-th>Price</b-th>
          <b-th>Last Update</b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <b-tr v-for="bitcoin in bitcoins[0]" v-bind:key="bitcoin.index">
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

          <b-td>
            {{ bitcoin.data.last_updated }}
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
import axios from "axios";
// import moment from "moment";

export default {
  name: "Crypto",
  data() {
    return {
      bitcoins: [],
      onProgress: true,
    };
  },

  methods: {},

  mounted() {
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
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped>
</style>