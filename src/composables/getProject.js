import { ref } from 'vue'
import { supabase } from 'src/config/supabaseClient'

const getProject = () => {
  const document = ref(null)

  const dataLoaded = ref(false)

  const loadProject = async (name) => {
    try {
      const { data, error, status } = await supabase.from('projects').select().eq('name', name)

      if (error && status !== 406) {
        throw Error('no data available')
      }
      if (data) {
        document.value = data
        dataLoaded.value = true
        console.log('getProject', document, document.value)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return { document, loadProject, dataLoaded }
}

export default getProject
