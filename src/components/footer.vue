<template>
    <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>{{ $t('footer.triage') }}</strong> {{ $t('footer.by') }} <a href="https://bartderijk.com">{{ $t('footer.bartDeRijk') }}</a>. 
        {{ $t('footer.sourceIsLicenced') }} <a href="http://opensource.org/licenses/mit-license.php">{{ $t('footer.mit') }}</a>. 
        {{ $t('footer.contentIsLicensed') }}  <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">{{ $t('footer.licenseAbbreviation') }}</a>.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>