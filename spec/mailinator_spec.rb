require File.join(File.dirname(__FILE__), 'spec_helper')

describe Mailinator do
  before(:each) do
    @random_name = "awesomemail#{rand(420)}"
    @primary_email = "#{@random_name}@mailinator.com"
  end

  it 'should have a primary email address' do
    @mail = Mailinator.new(@random_name)
    @mail.email.should == @primary_email
  end

  it 'should have an inbox URL' do
    @mail = Mailinator.new(@random_name)
    @mail.inbox_url.should == "http://mailinator.com/maildir.jsp?email=#{@random_name}"
  end

  it 'should have an RSS URL' do
    @mail = Mailinator.new(@random_name)
    @mail.rss_url.should == "http://mailinator.com/rss.jsp?email=#{@random_name}"
  end

  it 'should have an alternate email address'
  it 'should have an RSS feed'
  it 'should fetch a random primary address'
end
