require "openai"

# Initialize OpenAI client
client = OpenAI::Client.new(access_token: ENV["OPENAI_API_KEY"])

# Path to your audio file
file_path = "example_audio.mp3" # change this to your actual file

begin
  # Transcribe using whisper-1
  response = client.audio.transcribe(
    parameters: {
      model: "whisper-1",
      file: File.open(file_path, "rb")
    }
  )

  if response["text"]
    puts "Transcription:\n#{response['texat']}"
  else
    puts "Error: #{response}"
  end
rescue => e
  puts "An error occurred: #{e.message}"
end
