require 'uri'

class Mailinator
  BASE_URL = 'http://mailinator.com'

  attr_accessor :email, :primary

  def initialize(primary = nil, opts = {})
    @primary = primary
    @email = format_email(primary)
  end

  def inbox_url
    URI.parse("#{BASE_URL}/maildir.jsp?email=#{@primary}").to_s
  end

  def rss_url
    URI.parse("#{BASE_URL}/rss.jsp?email=#{@primary}").to_s
  end

  private

  def format_email(email)
    email =~ /^[a-zA-Z0-9]+@mailinator.com$/ ? email : "#{email}@mailinator.com"
  end
end
